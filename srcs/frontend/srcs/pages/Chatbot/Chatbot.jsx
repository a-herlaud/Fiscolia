import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Chatbot() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({ question: "" });
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("/ws");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Connected");
    };

    socket.onmessage = (event) => {
      console.log("recieved: ", event.data);
      setMessage(prev => prev + event.data);
    };

    socket.onerror = (err) => console.error("WebSocket error:", err);
    socket.onclose = () => console.log("WebSocket closed");

    return () => socket.close(); // cleanup on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(formData.question);
    } else {
      setMessage("WebSocket not connected");
    }
  };

  return (
    <div style={{ textAlign: "center", alignContent: "center" }}>
      <h1 style={{ color: "#000091" }}>CHATBOT</h1>
      <form onSubmit={handleSubmit}>
        <p>Chatbot</p>
        <input
          type="text"
          name="question"
          value={formData.question}
          onChange={handleChange}
          placeholder="Question our chatbot"
        />
        <p style={{ color: "#474747" }}>{message}</p>
        <button type="submit">Ask me</button>
      </form>
      <div>
        <Link to="/">
          <button>Return to the home Page</button>
        </Link>
      </div>
    </div>
  );
}

export default Chatbot;