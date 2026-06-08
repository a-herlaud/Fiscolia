from fastapi import FastAPI, WebSocket, Cookie
from pydantic import BaseModel
from test import get_agent_answer, OLLAMA_CHAT_MODEL, client_ollama
from contextlib import asynccontextmanager
from starlette.websockets import WebSocketDisconnect
from ollama import AsyncClient
import asyncio

async_client_ollama = AsyncClient(host="http://ollama:11434")


class UserFront(BaseModel):
    question: str


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Vérification et ingestion des données...")
    try:
        print("test enter lifespan")
        print("Base de données vectorielle prête.")
    except:
        print(f"Erreur lors de l'ingestion")
    yield  # Le serveur tourne ici

# On passe le lifespan à l'app
app = FastAPI(lifespan=lifespan)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("Nous sommes dans websocket chatbot")
    profiles_infos = websocket.cookies.get("profiles_infos")
    my_profile = websocket.cookies.get("my_profile")
    # if profiles_infos is None or my_profile is None:
    #     await websocket.send_json({"error": "Non authentifié (aucun cookie)"})
    #     print("Il n'y a pas de cookie")
    #     await websocket.close()
    #     return
    profiles_infos_explained = ""
    try:
        if profiles_infos and my_profile:
            print(f"User profile : [{my_profile}]")
            print(f"Summary of 3 profiles :\n{profiles_infos}\n")
            prompt_ctx = "Ecris moi un résumé de chacun de ces 3 profils, je veux un résumé sur son niveau de richesse par profil :" \
                "Je veux que tu utilises uniquement les données du contexte et que tu fasses le résumé en fonction du 'rni' :"
            agent_description = await async_client_ollama.chat(
                        model=OLLAMA_CHAT_MODEL,
                        messages=[{"role": "user", "content": prompt_ctx + profiles_infos}],
                        keep_alive="15m",  # Garde le modèle en mémoire pendant 5 minutes
                        stream=True, 
                    )
            print("La description des modèles est :")
            async for elem in agent_description:
                chunk = elem["message"]["content"]
                profiles_infos_explained += chunk
            await websocket.send_text("Bonjour ! Votre profil a été analysé.")
            print(f"\n[*]Here is the summary for our profiles by our LLM ![*]\n\n{profiles_infos_explained}\n")
        else:
            print("Guest mode : no data found inside user's cookie")
            my_profile = "Inconnu"
            profiles_infos_explained = "L'utilisateur n'est pas connecté et n'a pas fourni de profil."
        while True:
            data = await websocket.receive_text()
            try:
                prompt = get_agent_answer(data, profiles_infos_explained, my_profile)
                print("PROMPT = " + prompt)
                answer = await async_client_ollama.chat(
                    model=OLLAMA_CHAT_MODEL,
                    messages=[{"role": "user", "content": prompt}],
                    keep_alive="15m",  # Garde le modèle en mémoire pendant 5 minutes
                    stream=True, 
                )

                async for elem in answer:
                    chunk = elem["message"]["content"]
                    # Send character by character with a small delay
                    if chunk:
                        await websocket.send_text(chunk)
                        # Optional: small delay for more natural flow
                        # import asyncio
                        # await asyncio.sleep(0.01)  # 10ms between chars
                        # await websocket.send_text("Done !")
            except Exception as e:
                print(f"Error inside chat loop : {e}")
                await websocket.send_text("Sorry an error occured with AI")
    except WebSocketDisconnect:
        print("Client disconnected")