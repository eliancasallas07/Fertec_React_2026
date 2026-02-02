import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import logo from './img/logo.png';
import AppRoutes from './routes/AppRoutes';

// Componente de burbuja de chatbot sencillo
function ChatBotBubble() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! ¿Cómo estás? ¿Qué cerradura deseas?" }
  ]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <div className={open ? "ChatBotBubble open" : "ChatBotBubble"}>
      {open ? (
        <div className="ChatBotBubble-window">
          <div className="ChatBotBubble-header">
            <span>Asistente Fertec</span>
            <button className="ChatBotBubble-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="ChatBotBubble-messages">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === "bot" ? "ChatBotBubble-msg-bot" : "ChatBotBubble-msg-user"}>{msg.text}</div>
            ))}
          </div>
          <div className="ChatBotBubble-input">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      ) : (
        <button className="ChatBotBubble-btn" onClick={() => setOpen(true)} title="Chatea con nosotros">
          <img src={require('./img/chat-bot.png')} alt="ChatBot" style={{width:32, height:32}} />
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;


