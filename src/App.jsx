
import React, { useState } from 'react';
import './App.css';
import logo from './img/logo.png';
import cerradura1 from './img/cerradura1.png';
import cerradura2 from './img/cerradura2.png';
import cerradura3 from './img/cerradura3.jpg';

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
  // Catálogo de cerraduras de ejemplo
  const cerraduras = [
    { id: 1, nombre: 'Cerradura Digital 1', descripcion: 'Cerradura digital con acceso por huella y app.', precio: '$120', img: cerradura1 },
    { id: 2, nombre: 'Cerradura Digital 2', descripcion: 'Cerradura digital con teclado numérico y wifi.', precio: '$135', img: cerradura2 },
    { id: 3, nombre: 'Cerradura Digital 3', descripcion: 'Cerradura digital con bluetooth y alarma.', precio: '$150', img: cerradura3 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} alt="Logo" className="App-logo-img" />
        </div>
        <h1>Catálogo de Cerraduras</h1>
      </header>

      <nav className="Nav-bar">
        <div className="Nav-menu-icon">
          <span className="Nav-bar-icon"></span>
          <span className="Nav-bar-icon"></span>
          <span className="Nav-bar-icon"></span>
        </div>
        <div className="Nav-logo-text">FERTEC</div>
        <button className="Nav-contact-btn">Contáctanos</button>
        <div className="Nav-search">
          <input type="text" placeholder="Buscar..." />
          <span className="Nav-search-icon">🔍</span>
        </div>
        <div className="Nav-user">
          <span className="Nav-user-icon">👤</span>
        </div>
        <div className="Nav-cart">
          <span className="Nav-cart-icon">🛒</span>
          <span className="Nav-cart-badge">0</span>
        </div>
      </nav>

      <main className="Catalogo-main">
        <section className="Filtros-section">
          <h2 className="Filtros-title">Filtrar por</h2>
          <div className="Filtros-group">
                      <div className="Filtros-group">
                        <h3 className="Filtros-subtitle">Marca</h3>
                        <hr />
                        <label><input type="checkbox" /> Yale</label>
                        <label><input type="checkbox" /> Samsung</label>
                        <label><input type="checkbox" /> MarcaFertec</label>
                        <label><input type="checkbox" /> Philips</label>
                      </div>
            <h3 className="Filtros-subtitle">Categorías</h3>
            <hr />
            <label><input type="checkbox" /> Cerraduras Inteligentes Institucionales</label>
            <label><input type="checkbox" /> Cerraduras Inteligentes para Airbnb</label>
            <label><input type="checkbox" /> Cerraduras Inteligentes y Digitales</label>
          </div>
          <div className="Filtros-group">
            <h3 className="Filtros-subtitle">Precio</h3>
            <hr />
            <label><input type="checkbox" /> 800.000$ — 6.000.000$ <span className="Filtros-cantidad">(5)</span></label>
            <label><input type="checkbox" /> 2.000.000$ — 1.000.000$ <span className="Filtros-cantidad">(11)</span></label>
          </div>
          <div className="Filtros-group">
            <h3 className="Filtros-subtitle">Acceso</h3>
            <div className="Filtros-acceso-list">
              <button className="Filtros-acceso-btn"><span role="img" aria-label="wifi">📶</span> Wi-Fi</button>
              <button className="Filtros-acceso-btn"><span role="img" aria-label="bluetooth">📡</span> Bluetooth</button>
              <button className="Filtros-acceso-btn"><span role="img" aria-label="huella">🌀</span> Huella</button>
              <button className="Filtros-acceso-btn"><span role="img" aria-label="codigo">🔢</span> Código</button>
              <button className="Filtros-acceso-btn"><span role="img" aria-label="tarjeta">💳</span> Tarjeta</button>
            </div>
          </div>
          <div className="Filtros-group">
            <h3 className="Filtros-subtitle">Color</h3>
            <hr />
            <label><input type="checkbox" /> Cobre</label>
            <label><input type="checkbox" /> Negro Mate</label>
          </div>
        </section>
        <div className="Catalogo-lista">
          {cerraduras.map((cerradura) => (
            <div key={cerradura.id} className="Catalogo-card">
              <img src={cerradura.img} alt={cerradura.nombre} className="Catalogo-img" />
              <h2 className="Catalogo-titulo">{cerradura.nombre}</h2>
              <p>{cerradura.descripcion}</p>
              <p className="Catalogo-precio">{cerradura.precio}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="Catalogo-footer">
        <div className="Footer-columns">
          <div className="Footer-col">
            <img src={logo} alt="Logo" className="Footer-logo" />
            <p>Segurex Latam S.A.S<br/>NIT: xxxxxxxx</p>
            <p>PBX: +57 (60-1) 749 0944<br/>Celular: +57 314 XXXXXX<br/>Whatsapp: +57 317 XXXXX</p>
            <p>E-mail: ventas@Fertec.com<br/>Notificaciones judiciales:<br/>administrativo@Fertec.com</p>
            <div className="Footer-social">
              <span> {/*  íconos sociales  */} </span>
            </div>
          </div>
          <div className="Footer-col">
            <h3>Acerca de nosotros</h3>
            <ul>
              <li>Nuestra empresa</li>
              <li>Marcas aliadas</li>
              <li>Club Fertec</li>
              <li>Catálogos</li>
              <li>Blog Fertec</li>
              <li>Contáctanos</li>
            </ul>
          </div>
          <div className="Footer-col">
            <h3>Políticas</h3>
            <ul>
              <li>Términos y condiciones generales</li>
              <li>Métodos y condiciones de pago</li>
              <li>Términos y condiciones ADDI</li>
              <li>Términos y condiciones Sistecrédito</li>
              <li>Términos y condiciones - Pago contra entrega</li>
              <li>Política de envío, cambios y devoluciones</li>
              <li>Política de protección de datos</li>
              <li>PQRS</li>
            </ul>
          </div>
          <div className="Footer-col">
            <h3>Directorios</h3>
            <ul>
              <li>Distribuidores</li>
              <li>Instaladores</li>
            </ul>
            <div className="Footer-legal">
              <span>Industria y Comercio<br/>Superintendencia</span>
            </div>
          </div>
        </div>
        <div className="Footer-copyright">
          <span>© 2026 Catálogo de Cerraduras</span>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573108530408"
        className="Whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <img src={require('./img/whatsapp-icon.png')} alt="WhatsApp" />
      </a>

      {/* Burbuja de chatbot */}
      <ChatBotBubble />
    </div>
  );
}

export default App;
