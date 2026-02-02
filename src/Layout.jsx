import cerradura1 from './img/cerradura1.png';
import cerradura2 from './img/cerradura2.png';
import cerradura3 from './img/cerradura3.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from './img/logo.png';
import userIcon from './img/user.png';
import cartIcon from './img/carrito_compras.png';
import lupaIcon from './img/lupa.png';
// Componente de burbuja de chatbot sencillo
function ChatBotBubble() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy el asistente Fertec. ¿Sobre qué filtro deseas consultar?\n1. Marca\n2. Categorías\n3. Precio\n4. Acceso\n5. Color" }
  ]);
  const [step, setStep] = useState(0); // 0: inicio, 1: marca, 2: categoría, etc.

  // Opciones de cada filtro
  const opciones = [
    null,
    ["Yale", "Samsung", "MarcaFertec", "Philips"],
    ["Cerraduras Inteligentes", "Cerraduras Digitales", "Cerraduras Huella", "Cerraduras Bluetooth", "Cerraduras Tarjeta", "Cerraduras Código"],
    ["$150.000 — $300.000", "$300.001 — $600.000", "$600.001 — $1.000.000", "$1.000.001 — $2.000.000", "Más de $2.000.000"],
    ["Wi-Fi", "Bluetooth", "Huella", "Código", "Tarjeta"],
    ["Negro Mate", "Cobre", "Plateado", "Níquel", "Dorado", "Gris", "Bronce", "Blanco"]
  ];

  const handleSend = () => {
    if (input.trim() === "") return;
    const userMsg = { from: "user", text: input };
    let botMsg = null;
    let nextStep = step;
    // Primer paso: elegir filtro
    if (step === 0) {
      const num = parseInt(input);
      if (num >= 1 && num <= 5) {
        nextStep = num;
        botMsg = {
          from: "bot",
          text: `Has elegido ${["", "Marca", "Categorías", "Precio", "Acceso", "Color"][num]}.\nElige una opción:\n` + opciones[num].map((op, i) => `${i+1}. ${op}`).join("\n")
        };
      } else {
        botMsg = { from: "bot", text: "Por favor responde solo con el número de la opción (1-5)." };
      }
    } else if (step >= 1 && step <= 5) {
      const num = parseInt(input);
      if (num >= 1 && num <= opciones[step].length) {
        botMsg = { from: "bot", text: `Has seleccionado: ${opciones[step][num-1]}\n¿Deseas consultar otro filtro?\n1. Sí\n2. No` };
        nextStep = 10 + step; // paso de confirmación
      } else {
        botMsg = { from: "bot", text: `Por favor responde solo con el número de la opción (1-${opciones[step].length}).` };
      }
    } else if (step > 10 && step <= 15) {
      // Confirmación para volver a filtrar
      if (input.trim() === "1") {
        botMsg = { from: "bot", text: "¿Sobre qué filtro deseas consultar?\n1. Marca\n2. Categorías\n3. Precio\n4. Acceso\n5. Color" };
        nextStep = 0;
      } else if (input.trim() === "2") {
        botMsg = { from: "bot", text: "¡Gracias por usar el asistente Fertec! Si necesitas más ayuda, vuelve a escribir." };
        nextStep = 99;
      } else {
        botMsg = { from: "bot", text: "Responde solo con 1 (Sí) o 2 (No)." };
      }
    } else {
      botMsg = { from: "bot", text: "¡Gracias por usar el asistente Fertec! Si necesitas más ayuda, vuelve a escribir." };
      nextStep = 99;
    }
    setMessages([...messages, userMsg, botMsg]);
    setInput("");
    setStep(nextStep);
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
              placeholder="Responde solo con el número..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              disabled={step === 99}
            />
            <button onClick={handleSend} disabled={step === 99}>Enviar</button>
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

const Layout = ({ children, titulo }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <header className="App-header">
        <div>
          <img src={logo} alt="Logo" className="App-logo-img" />
        </div>
        <h1>Catálogo de Cerraduras</h1>
      </header>
      <nav className="Nav-bar">
        <div className="Nav-menu-icon" onClick={() => setSidebarOpen(true)} style={{cursor:'pointer'}}>
          <span className="Nav-bar-icon"></span>
          <span className="Nav-bar-icon"></span>
          <span className="Nav-bar-icon"></span>
        </div>
        <div className="Nav-logo-text">FERTEC</div>
        <a
          href="https://wa.me/573108530408"
          className="Nav-contact-btn"
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos
        </a>
        <div className="Nav-search">
          <input type="text" placeholder="Buscar..." />
          <span className="Nav-search-icon">
            <img src={lupaIcon} alt="Buscar" style={{width: '22px', height: '22px', verticalAlign: 'middle'}} />
          </span>
        </div>
        <div className="Nav-user">
          <img src={userIcon} alt="Perfil" className="Nav-user-icon" style={{width: '28px', height: '28px'}} />
        </div>
        <div className="Nav-cart">
          <img src={cartIcon} alt="Carrito" className="Nav-cart-icon" style={{width: '28px', height: '28px'}} />
          <span className="Nav-cart-badge">0</span>
        </div>
      </nav>
      <main className="Catalogo-main">
        {/* Sección independiente para el título */}
        <section className="Catalogo-titulo-section">
          {titulo && (
            <h2 style={{marginTop: '1.5rem', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', color: '#222'}}>{titulo}</h2>
          )}
        </section>
        {/* Solo renderizar el filtro, sin títulos ni textos extra */}
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
            <label><input type="checkbox" /> Cerraduras Inteligentes</label>
            <label><input type="checkbox" /> Cerraduras Digitales</label>
            <label><input type="checkbox" /> Cerraduras Huella</label>
            <label><input type="checkbox" /> Cerraduras Bluetooth</label>
            <label><input type="checkbox" /> Cerraduras Tarjeta</label>
            <label><input type="checkbox" /> Cerraduras Código</label>
          </div>
          <div className="Filtros-group">
            <h3 className="Filtros-subtitle">Precio</h3>
            <hr />
            <label><input type="checkbox" /> $150.000 — $300.000 <span className="Filtros-cantidad">(8)</span></label>
            <label><input type="checkbox" /> $300.001 — $600.000 <span className="Filtros-cantidad">(12)</span></label>
            <label><input type="checkbox" /> $600.001 — $1.000.000 <span className="Filtros-cantidad">(7)</span></label>
            <label><input type="checkbox" /> $1.000.001 — $2.000.000 <span className="Filtros-cantidad">(4)</span></label>
            <label><input type="checkbox" /> Más de $2.000.000 <span className="Filtros-cantidad">(2)</span></label>
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
            <label><input type="checkbox" /> Negro Mate</label>
            <label><input type="checkbox" /> Cobre</label>
            <label><input type="checkbox" /> Plateado</label>
            <label><input type="checkbox" /> Níquel</label>
            <label><input type="checkbox" /> Dorado</label>
            <label><input type="checkbox" /> Gris</label>
            <label><input type="checkbox" /> Bronce</label>
            <label><input type="checkbox" /> Blanco</label>
          </div>
        </section>
        {/* Imágenes del catálogo */}
        <div className="Catalogo-lista" style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap'}}>
          <div className="Catalogo-card">
            <img src={cerradura1} alt="Cerradura Digital 1" className="Catalogo-img" style={{width: '120px', height: 'auto'}} />
            <h2 className="Catalogo-titulo">Cerradura Digital 1</h2>
          </div>
          <div className="Catalogo-card">
            <img src={cerradura2} alt="Cerradura Digital 2" className="Catalogo-img" style={{width: '120px', height: 'auto'}} />
            <h2 className="Catalogo-titulo">Cerradura Digital 2</h2>
          </div>
          <div className="Catalogo-card">
            <img src={cerradura3} alt="Cerradura Digital 3" className="Catalogo-img" style={{width: '120px', height: 'auto'}} />
            <h2 className="Catalogo-titulo">Cerradura Digital 3</h2>
          </div>
          <div className="Catalogo-card">
            <img src={cerradura1} alt="Cerradura Digital 4" className="Catalogo-img" style={{width: '120px', height: 'auto'}} />
            <h2 className="Catalogo-titulo">Cerradura Digital 4</h2>
          </div>
          <div className="Catalogo-card">
            <img src={cerradura2} alt="Cerradura Digital 5" className="Catalogo-img" style={{width: '120px', height: 'auto'}} />
            <h2 className="Catalogo-titulo">Cerradura Digital 5</h2>
          </div>
          <div className="Catalogo-card">
            <img src={cerradura3} alt="Cerradura Digital 6" className="Catalogo-img" style={{width: '120px', height: 'auto'}} />
            <h2 className="Catalogo-titulo">Cerradura Digital 6</h2>
          </div>
        </div>
      </main>
      <footer className="Catalogo-footer">
        <div className="Footer-columns">
          <div className="Footer-col">
            <img src={logo} alt="Logo" className="Footer-logo" />
            <p>Fertec Solutions<br/>NIT: xxxxxxxx</p>
            <p>749 0944<br/>Celular: +57 310 853 0408<br/>Whatsapp: +57 310 853 0408</p>
            <p>E-mail: ventas@Fertec.com administrativo@Fertec.com</p>
            <div className="Footer-social">
              <span> {/*  íconos sociales  */} </span>
            </div>
          </div>
          <div className="Footer-col">
            <h3>Acerca de nosotros</h3>
            <ul>
              <li>Nuestra empresa</li>
              <li>Catálogos</li>
              <li>Contáctanos</li>
            </ul>
          </div>
          <div className="Footer-col">
            <h3>Políticas</h3>
            <ul>
              <li>Términos y condiciones generales</li>
              <li>Métodos y condiciones de pago</li>
              <li>Política de envío, cambios y devoluciones</li>
              <li>Política de protección de datos</li>
              <li>PQRS</li>
            </ul>
          </div>
          <div className="Footer-col">
            <h3>Directorios</h3>
            <ul>
              <li>Instaladores</li>
            </ul>
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
};

export default Layout;
