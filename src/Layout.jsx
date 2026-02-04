import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from './img/logo.png';
import lupaIcon from './img/lupa.png';
import cerraduraBluetooth from './img/cerradura_bluetooth.png';
import cerraduraDigital from './img/cerradura_digital.png';
import cerraduraHuella from './img/cerradura_huella.png';
import cerraduraInteligente from './img/cerradura_inteligente.png';
import cerraduraTarjeta from './img/cerradura_tarjeta.png';
// Datos de cerraduras
const CERRADURAS = [
  {
    key: 'bluetooth',
    nombre: 'Cerradura Bluetooth',
    marca: 'Samsung',
    categoria: 'Cerraduras Bluetooth',
    precio: 690000,
    precioTachado: 1200000,
    acceso: 'Bluetooth',
    color: 'Plateado',
    img: cerraduraBluetooth,
    desc: 'Conexión inalámbrica para control desde tu smartphone.',
    badge: 'RECOMENDADO',
    descuento: '-43%'
  },
  {
    key: 'digital',
    nombre: 'Cerradura Digital',
    marca: 'Yale',
    categoria: 'Cerraduras Digitales',
    precio: 590000,
    precioTachado: 1000000,
    acceso: 'Código',
    color: 'Negro Mate',
    img: cerraduraDigital,
    desc: 'Apertura con código numérico y máxima seguridad.',
    badge: 'MÁS VENDIDO',
    descuento: '-41%'
  },
  {
    key: 'huella',
    nombre: 'Cerradura Huella',
    marca: 'MarcaFertec',
    categoria: 'Cerraduras Huella',
    precio: 850000,
    precioTachado: 1400000,
    acceso: 'Huella',
    color: 'Gris',
    img: cerraduraHuella,
    desc: 'Acceso rápido y seguro con huella digital.',
    descuento: '-39%'
  },
  {
    key: 'inteligente',
    nombre: 'Cerradura Inteligente',
    marca: 'Philips',
    categoria: 'Cerraduras Inteligentes',
    precio: 990000,
    precioTachado: 1600000,
    acceso: 'Wi-Fi',
    color: 'Dorado',
    img: cerraduraInteligente,
    desc: 'Control total desde app móvil y múltiples accesos.',
    descuento: '-38%'
  },
  {
    key: 'tarjeta',
    nombre: 'Cerradura Tarjeta',
    marca: 'Samsung',
    categoria: 'Cerraduras Tarjeta',
    precio: 670000,
    precioTachado: 1100000,
    acceso: 'Tarjeta',
    color: 'Plateado',
    img: cerraduraTarjeta,
    desc: 'Ideal para hoteles y oficinas, acceso con tarjeta.',
    descuento: '-39%'
  },
];

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
          <img src={require('./img/chat-bot.png')} alt="ChatBot" className="ChatBotBubble-img" />
        </button>
      )}
    </div>
  );
}

const Layout = ({ children, titulo }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Estado para filtros
  const [filtro, setFiltro] = useState({ tipo: '', valor: '' });
  const [accesoActivo, setAccesoActivo] = useState('');
  const [resultados, setResultados] = useState(CERRADURAS);

  // Manejar selección de checkbox (solo uno a la vez)
  const handleFiltroChange = (tipo, valor) => {
    setFiltro({ tipo, valor });
    setAccesoActivo('');
  };
  // Manejar selección de acceso (solo uno a la vez)
  const handleAcceso = (valor) => {
    setFiltro({ tipo: 'acceso', valor });
    setAccesoActivo(valor);
  };
  // Buscar según filtro
  const buscar = () => {
    let res = [];
    if (!filtro.tipo || !filtro.valor) {
      setResultados(CERRADURAS);
      return;
    }
    if (filtro.tipo === 'marca') {
      // Mostrar una cerradura al azar de esa marca
      const arr = CERRADURAS.filter(c => c.marca === filtro.valor);
      if (arr.length > 0) res = [arr[Math.floor(Math.random() * arr.length)]];
    } else if (filtro.tipo === 'categoria') {
      // Mostrar todas las cerraduras de esa categoría
      res = CERRADURAS.filter(c => c.categoria === filtro.valor);
    } else if (filtro.tipo === 'precio') {
      // Mostrar cerraduras en el rango
      if (filtro.valor === '$150.000 — $300.000') res = CERRADURAS.filter(c => c.precio >= 150000 && c.precio <= 300000);
      else if (filtro.valor === '$300.001 — $600.000') res = CERRADURAS.filter(c => c.precio > 300000 && c.precio <= 600000);
      else if (filtro.valor === '$600.001 — $1.000.000') res = CERRADURAS.filter(c => c.precio > 600000 && c.precio <= 1000000);
      else if (filtro.valor === '$1.000.001 — $2.000.000') res = CERRADURAS.filter(c => c.precio > 1000000 && c.precio <= 2000000);
      else if (filtro.valor === 'Más de $2.000.000') res = CERRADURAS.filter(c => c.precio > 2000000);
    } else if (filtro.tipo === 'acceso') {
      // Mostrar la cerradura correspondiente
      res = CERRADURAS.filter(c => c.acceso === filtro.valor);
      if (res.length > 0) res = [res[Math.floor(Math.random() * res.length)]];
    } else if (filtro.tipo === 'color') {
      // Mostrar una cerradura al azar de ese color
      const arr = CERRADURAS.filter(c => c.color === filtro.valor);
      if (arr.length > 0) res = [arr[Math.floor(Math.random() * arr.length)]];
    }
    setResultados(res.length > 0 ? res : []);
  };

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
        <div className="Nav-menu-icon" onClick={() => setSidebarOpen(true)}>
          <span className="Nav-bar-icon"></span>
          <span className="Nav-bar-icon"></span>
          <span className="Nav-bar-icon"></span>
        </div>
        <div className="Nav-logo-text">FERTEC</div>
        <a
          href="https://wa.me/573108530408"
          className="Nav-contact-btn Nav-contact-btn-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos
        </a>
        <div className="Nav-search">
          <input type="text" placeholder="Buscar..." />
          <span className="Nav-search-icon">
            <img src={lupaIcon} alt="Buscar" className="Nav-search-img" />
          </span>
        </div>
      </nav>
      <main className="Catalogo-main">
        {/* Sección independiente para el título */}
        <section className="Catalogo-titulo-section">
          {titulo && (
            <h2 className="Catalogo-titulo-main">{titulo}</h2>
          )}
        </section>
        {/* Filtros dinámicos */}
        <section className="Filtros-section">
          <button className="Filtros-buscar-btn" onClick={buscar}>Buscar</button>
          <h2 className="Filtros-title">Filtrar por</h2>
          <div className="Filtros-group">
            <div className="Filtros-group">
              <h3 className="Filtros-subtitle">Marca</h3>
              <hr />
              {['k7','k7plus','k9','k86','T8','j23','a89'].map(m => (
                <label key={m}><input type="checkbox" checked={filtro.tipo==='marca'&&filtro.valor===m} onChange={()=>handleFiltroChange('marca',m)} /> {m}</label>
              ))}
            </div>
            <h3 className="Filtros-subtitle">🔐 Tipo de tecnología</h3>
            <hr />
            {['Cerraduras Manuales','Cerraduras Inteligentes','Cerraduras Automáticas'].map(tipo => (
              <label key={tipo}><input type="checkbox" checked={filtro.tipo==='tecnologia'&&filtro.valor===tipo} onChange={()=>handleFiltroChange('tecnologia',tipo)} /> {tipo}</label>
            ))}
          </div>
          <div className="Filtros-group">
            <h3 className="Filtros-subtitle"> Precio</h3>
            <hr />
            {['$150.000 — $300.000','$300.001 — $600.000','$600.001 — $1.000.000','$1.000.001 — $2.000.000','Más de $2.000.000'].map(p => (
              <label key={p}><input type="checkbox" checked={filtro.tipo==='precio'&&filtro.valor===p} onChange={()=>handleFiltroChange('precio',p)} /> {p}</label>
            ))}
          </div>
          <div className="Filtros-group">
            <h3 className="Filtros-subtitle"> Método de apertura</h3>
            <hr />
            {['Huella digital','Código / Clave','Tarjeta','Bluetooth / App','Llave mecánica','Reconocimiento facial'].map(metodo => (
              <label key={metodo}><input type="checkbox" checked={filtro.tipo==='apertura'&&filtro.valor===metodo} onChange={()=>handleFiltroChange('apertura',metodo)} /> {metodo}</label>
            ))}
          </div>
          <div className="Filtros-group">
            <h3 className="Filtros-subtitle"> Uso recomendado</h3>
            <hr />
            {['Hogar / Apartamento','Oficinas y negocios','Portones y garajes','Puertas de seguridad'].map(uso => (
              <label key={uso}><input type="checkbox" checked={filtro.tipo==='uso'&&filtro.valor===uso} onChange={()=>handleFiltroChange('uso',uso)} /> {uso}</label>
            ))}
          </div>
          <div className="Filtros-group">
            <h3 className="Filtros-subtitle"> Nivel</h3>
            <hr />
            {['Básica','Intermedia','Premium'].map(nivel => (
              <label key={nivel}><input type="checkbox" checked={filtro.tipo==='nivel'&&filtro.valor===nivel} onChange={()=>handleFiltroChange('nivel',nivel)} /> {nivel}</label>
            ))}
          </div>
        </section>
        {/* Imágenes del catálogo filtradas */}
        <div className="Catalogo-lista">
          {resultados.length === 0 && <div style={{textAlign:'center',width:'100%'}}>No se encontraron productos.</div>}
          {resultados.map((c, i) => (
            <div className="Catalogo-card" key={c.key}>
              {c.badge && <span className={`Catalogo-badge Catalogo-badge-${c.badge==='RECOMENDADO'?'recomendado':'masvendido'}`}>{c.badge}</span>}
              <img src={c.img} alt={c.nombre} className="Catalogo-img Catalogo-img-small" />
              <h2 className="Catalogo-titulo">{c.nombre}</h2>
              <p className="Catalogo-desc">{c.desc}</p>
              <div className="Catalogo-precios">
                <span className="Catalogo-precio-tachado">${c.precioTachado.toLocaleString()}</span>
                <span className="Catalogo-precio">${c.precio.toLocaleString()} COP</span>
                {c.descuento && <span className="Catalogo-descuento">{c.descuento}</span>}
              </div>
            </div>
          ))}
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
