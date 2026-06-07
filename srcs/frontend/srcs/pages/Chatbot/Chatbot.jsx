import { useState, useEffect, useRef } from 'react';
import MessageBubble from './components/MessageBubble';
import './Chat.css';
import '../UserSession/UserSession.css'

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you?', sender: 'bot' },
  ]);

  const [input, setInput] = useState('');
  const [botMessage, setBotMessage] = useState('');
  const [currentBotMessageId, setCurrentBotMessageId] = useState(null);
  const socketRef = useRef(null);
  let messageCounter = useRef(2);

  useEffect(() => {
    const socket = new WebSocket("/ws");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Connected");
    };

    socket.onmessage = (event) => {
      console.log("📩 Chunk received:", event.data);
      setBotMessage((prev) => prev + event.data);
    };

    socket.onerror = (err) => {
      console.error("❌ WebSocket error:", err);
    };
    
    socket.onclose = () => {
      console.log("⚠️  WebSocket closed");
    };

    return () => socket.close();
  }, []);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messageCounter.current,
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setBotMessage('');
    messageCounter.current += 1;

    // Add empty bot message placeholder
    const botMessageId = messageCounter.current;
    setCurrentBotMessageId(botMessageId);
    setMessages((prev) => [
      ...prev,
      {
        id: botMessageId,
        text: '',
        sender: 'bot',
      },
    ]);
    messageCounter.current += 1;

    // Send to backend
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(input);
    } else {
      console.error("WebSocket not connected");
    }
  };

  // Update bot message as it streams in
  useEffect(() => {
    if (botMessage !== '' && currentBotMessageId !== null) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === currentBotMessageId
            ? { ...msg, text: botMessage }
            : msg
        )
      );
    }
  }, [botMessage, currentBotMessageId]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
		<div className="start-body-style">
      <div className="chat-container">
          
          <div className="chat-header">
            <h1>Fiscopain</h1>
          </div>

          <div className="messages-area">
                {messages.map((msg) => (
                  <MessageBubble key={msg.id} message={msg} />
                ))}
          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendMessage}>Send</button>

          </div>

      </div>
    </div>
        
  );
}