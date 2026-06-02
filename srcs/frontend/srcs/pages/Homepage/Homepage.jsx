
import {Link} from 'react-router-dom'
import './Homepage.css'
import img_logo from '../../assets/logo.png'
import img_chatbot from '../../assets/site_screenshots/chatbot.png'
import img_emoji from '../../assets/site_screenshots/emoji.png'
import img_menu from '../../assets/site_screenshots/menu.png'
import img_modify_profil from '../../assets/site_screenshots/modify_profil.png'
import img_time from '../../assets/time.png'
import img_paix from '../../assets/paix.png'
import '../../index.css'

function Home() {

	return (
		<div className="start-body-style">
			<div className="home-block">
				<div className="text-home-block">
					<h1>Fiscolia</h1>
					<h2>Assistance pour remplir votre</h2>
					<h2>déclaration fiscale</h2>
					<p>Ça n'a jamais été aussi simple</p>
				</div>
				<div className="photo-emoji-home-block">
					<img src={img_emoji} alt="emoji" />
				</div>
			</div>

			

			<div className="home-block">
				<div className="photo-home-block">
					<img src={img_chatbot} alt="chatbot_page" />
				</div>
				<div className="text-home-block">
					<h2>Déclarez vos impôts simplement et en toute confiance</h2>
					<p>Notre assistant intelligent analyse des milliers de situations similaires pour vous guider à chaque étape de votre déclaration</p>
				</div>
			</div>

			

			<div className="home-block">
				<div className="photo-home-block">
					<img src={img_time} alt="time" />
				</div>
				<div className="text-home-block">
					<h2>Pourquoi choisir une assistance?</h2>
					<p>🤖 Gagnez du temps grâce à une assistance personnalisée</p>
					<p>⚡ Réduisez les erreurs en profitant de recommandations adaptées à votre situation</p>
					<p>📄 Obtenez des suggestions intelligentes basées sur des profils comparables</p>
					<p>🚀 Remplissez vos formulaires en quelques minutes, sans connaissances fiscales particulières</p>
				</div>
			</div>

			

			<div className="home-block">
				<div className="photo-home-block">
					<img src={img_paix} alt="paix" />
				</div>
				<div className="text-home-block">
					<h2>Moins de stress, plus de clarté</h2>
					<p>L'IA vous guide, vous gardez le contrôle</p>
				</div>
			</div>
			

			<div className="home-block">
				<div className="photo-home-block">
					<img src={img_menu} alt="menu" />
				</div>
				<div className="text-home-block">
					<h2>Passer facilement l'authentification</h2>
					<p>Cliquez sur le menu et sélectionnez de s'inscrire ou de se connecter</p>
				</div>
			</div>

			<div className="home-block">
				<div className="photo-home-block">
					<img src={img_modify_profil} alt="modify_profil_page" />
				</div>
				<div className="text-home-block">
					<h2>Modifiez facilement votre profil</h2>
					<p>Cliquez sur le menu et sélectionnez de vous inscrire ou de vous connecter</p>
				</div>
			</div>




			<div className="link-block">
					<h2>Les articles intéressants à lire</h2>
			</div>
			<div className="link-block">
				<div className="link-article">
					<a href="https://www.impots.gouv.fr/toutes-les-questions/particulier/puis-je-declarer-en-ligne-pour-ma-premiere-declaration-de-revenus">
						Puis-je déclarer en ligne pour ma première déclaration de revenus ?
					</a>
				</div>
				<div className="link-article">
					<a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F359">
						Quelle est la date limite pour faire sa déclaration de revenus pour les impôts ?
					</a>
				</div>
				<div className="link-article">
					<a href="https://www.lemonde.fr/idees/article/2024/03/29/impots-le-combat-pour-une-fiscalite-juste-depasse-la-seule-dimension-economique_6224884_3232.html">
						Impôts : « Le combat pour une fiscalité juste dépasse la seule dimension économique »
					</a>
				</div>
			</div>
		</div>			
	)

}

export default Home