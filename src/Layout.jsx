import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from './img/logo.png';
import facebookIcon from './img/facebook.png';
import gmailIcon from './img/gmail.png';
import instagramIcon from './img/instagram.png';
import nequiIcon from './img/nequi.png';
import mastercardIcon from './img/mastercard.png';
import daviplataIcon from './img/daviplata.png';
import burbujaAudio from './audio/burbuja-sonido.mp3';
import navBurbujaAudio from './audio/nav-burbuja.mp3';
// Datos de cerraduras
export const CERRADURAS = [
              {
                key: 'a89',
                nombre: 'Cerradura A89',
                marca: 'a89',
                categoria: 'Cerraduras Automáticas',
                precio: 1500000,
                precioTachado: 1800000,
                acceso: 'Reconocimiento facial, Automática',
                color: 'Negro Brillante',
                nivel: 'Premium',
                img: [require('./img/a89.jpeg'), require('./img/a89-2.jpeg'), require('./img/a89-3.jpeg')],
                desc: 'Automática\nIdeal para puertas de seguridad\nPuede ser instalada también en puertas de madera y metal\nReconocimiento facial\nColor: Negro Brillante\nCámara y pantalla\nVideo portero\nTimbre incorporado\nAlimentación: Batería de litio recargable\nPasador nocturno',
                descuento: '-17%'
              },
            {
              key: 'j23',
              nombre: 'Cerradura J23',
              marca: 'j23',
              categoria: 'Cerraduras Automáticas',
              precio: 650000,
              precioTachado: 800000,
              acceso: 'Huella, Clave, Tarjeta, Llave, Remoto',
              color: 'Negro',
              nivel: 'Intermedia',
              img: [require('./videos/j23.mp4'), require('./videos/j23-2.mp4'), require('./videos/j23-3.mp4')],
              desc: 'Automática\n\nIdeal para portones a la intemperie, puertas de garaje\nCertificación IP67\n\nMétodos de apertura:\nHuella\nClave\nTarjeta\nLlave de seguridad\nRemotamente desde el celular\n\nColor: Negro',
              descuento: '-19%'
            },
          {
            key: 't8',
            nombre: 'Cerradura T8',
            marca: 'T8',
            categoria: 'Cerraduras Inteligentes',
            precio: 280000,
            precioTachado: 350000,
            acceso: 'Huella, Clave, Llave, Bluetooth',
            color: 'Negro',
            nivel: 'Básica',
            img: [require('./img/t8.jpeg'), require('./img/t8-2.jpeg')],
            desc: 'Inteligente\n\nIdeal para alcobas, oficinas y negocios\n\nMétodos de apertura:\nHuella\nClave\nLlave de seguridad\nApertura remota por Bluetooth\n\nColor: Negro',
            descuento: '-20%'
          },
        {
          key: 'k86',
          nombre: 'Cerradura K86',
          marca: 'k86',
          categoria: 'Cerraduras Manuales',
          precio: 900000,
          precioTachado: 1100000,
          acceso: 'Manual',
          color: 'Negro',
          nivel: 'Intermedia',
          img: [require('./img/k86.jpeg'), require('./img/k86-2.jpeg'), require('./videos/k86-3.mp4')],
          desc: 'Manual\n\nIdeal para casas residenciales y apartamentos\nPuede ser instalada en puertas de madera y metal\nCámara y pantalla\nAlimentación: Batería de litio recargable\n\nColor: Negro',
          descuento: '-18%'
        },
      {
        key: 'k9',
        nombre: 'Cerradura K9',
        marca: 'k9',
        categoria: 'Cerraduras Manuales',
        precio: 700000,
        precioTachado: 850000,
        acceso: 'Manual',
        color: 'Negro',
        nivel: 'Básica',
        img: [require('./img/k9.jpeg'), require('./img/k9-2.jpeg'), require('./videos/k9-3.mp4')],
        desc: 'Manual\n\nIdeal para casas residenciales y apartamentos\nPuede ser instalada en puertas de madera y metal\n\nColor: Negro',
        descuento: '-18%'
      },
    {
      key: 'k7plus',
      nombre: 'Cerradura K7 Plus',
      marca: 'k7plus',
      categoria: 'Cerraduras Manuales',
      precio: 700000,
      precioTachado: 850000,
      acceso: 'Manual',
      color: 'Negro',
      nivel: 'Intermedia',
      img: [require('./img/k7-plus.jpeg'), require('./img/k7-plus-2.jpeg'), require('./img/k7-plus-3.jpeg')],
      desc: 'Manual\n\nIdeal para puertas de madera y metal\nIncluye cámara y pantalla\nCuenta con batería de litio recargable\n\nColor: Negro',
      descuento: '-18%'
    },
  {
    key: 'k7',
    nombre: 'Cerradura K7',
    marca: 'k7',
    categoria: 'Cerraduras Manuales',
    precio: 500000,
    precioTachado: 600000,
    acceso: 'Manual',
    color: 'Negro',
    nivel: 'Básica',
    img: [require('./img/k7.jpeg'), require('./img/k7-2.jpeg'), require('./videos/k7-3.mp4')],
    desc: 'Manual\n\nIdeal para hogares, hotelería, Airbag\nPuede ser instalada en puertas de metal y madera\n\nColor: Negro\nCerradura tipo manual',
    descuento: '-17%'
  },
];

// Componente de burbuja de chatbot sencillo
function ChatBotBubble() {

  const [open, setOpen] = useState(false);
  const audioRef = React.useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "🚀 Bienvenido, explorador\nTu siguiente decisión define el camino.\nEscribe el número de la opción que deseas continuar:\n\n1️⃣ Base principal\n2️⃣ Comunicación directa\n3️⃣ Cerraduras Bluetooth\n4️⃣ Cerraduras con Código\n5️⃣ Cerraduras con Huella\n6️⃣ Cerraduras con Tarjeta\n7️⃣ Centro de Soporte" }
  ]);
  const [step, setStep] = useState(0); // 0: menú, 99: fin
  const [filtros, setFiltros] = useState({});
  const navigate = window.location ? (url) => window.location.href = url : () => {};

  // Utilidades para obtener opciones según el filtro anterior
  const getCategorias = () => {
    return Array.from(new Set(CERRADURAS.map(c => c.categoria)));
  };
  const getMarcas = (categoria) => {
    return Array.from(new Set(CERRADURAS.filter(c => c.categoria === categoria).map(c => c.marca)));
  };
  const getAperturas = (categoria, marca) => {
    return Array.from(new Set(CERRADURAS.filter(c => c.categoria === categoria && c.marca === marca).map(c => c.acceso)));
  };
  const getNiveles = (categoria, marca, acceso) => {
    return Array.from(new Set(CERRADURAS.filter(c => c.categoria === categoria && c.marca === marca && c.acceso === acceso).map(c => c.nivel)));
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    const userMsg = { from: "user", text: input };
    let botMsg = null;
    let nextStep = step;
    let newFiltros = { ...filtros };

    if (step === 0) {
      const opciones = [
        { nombre: "Home", url: "/" },
        { nombre: "Contáctanos", url: "/contactenos" },
        { nombre: "Cerraduras Bluetooth", url: "/cerraduras_bluetooth" },
        { nombre: "Cerraduras Código", url: "/cerraduras_codigo" },
        { nombre: "Cerraduras Huella", url: "/cerraduras_huella" },
        { nombre: "Cerraduras Tarjeta", url: "/cerraduras_tarjeta" },
        { nombre: "Soporte", url: "/soporte" }
      ];
      const idx = parseInt(input);
      if (!isNaN(idx) && idx >= 1 && idx <= opciones.length) {
        botMsg = { from: "bot", text: `Has seleccionado: ${opciones[idx-1].nombre}. Redireccionando...` };
        setTimeout(() => navigate(opciones[idx-1].url), 1200);
        nextStep = 0;
      } else {
        botMsg = { from: "bot", text: "Por favor, responde solo con el número de la opción del menú." };
      }
    } else {
      botMsg = { from: "bot", text: "¡Gracias por usar el asistente Fertec! Si necesitas más ayuda, vuelve a escribir o recarga la página para reiniciar la conversación." };
      nextStep = 99;
    }
    setMessages([...messages, userMsg, botMsg]);
    setInput("");
    setStep(nextStep);
    setFiltros(newFiltros);
  };

  // Función para abrir el chat y reproducir el sonido
  const handleOpen = () => {
    setOpen(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className={open ? "ChatBotBubble open" : "ChatBotBubble"}>
      <audio ref={audioRef} src={burbujaAudio} preload="auto" />
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
        <button className="ChatBotBubble-btn" onClick={handleOpen} title="Chatea con nosotros">
          <img src={require('./img/chat-bot.png')} alt="ChatBot" className="ChatBotBubble-img" />
        </button>
      )}
    </div>
  );
}

const Layout = ({ children, titulo, mostrarFiltro = true }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navAudioRef = React.useRef(null);
  const location = useLocation();

  // Estado para filtros
  const [filtro, setFiltro] = useState({ tipo: '', valor: '' });
  const [resultados, setResultados] = useState(CERRADURAS);

  // Manejar selección de checkbox (solo uno a la vez)
  const handleFiltroChange = (tipo, valor) => {
    setFiltro({ tipo, valor });
  };
  // Buscar según filtro
  const buscar = () => {
    let res = [];
    if (!filtro.tipo || !filtro.valor) {
      setResultados(CERRADURAS);
      return;
    }
    if (filtro.tipo === 'marca') {
      const arr = CERRADURAS.filter(c => c.marca === filtro.valor);
      if (arr.length > 0) res = [arr[Math.floor(Math.random() * arr.length)]];
    } else if (filtro.tipo === 'categoria') {
      if (filtro.valor === 'Cerraduras Inteligentes') {
        res = CERRADURAS;
      } else {
        res = CERRADURAS.filter(c => c.categoria === filtro.valor);
      }
    } else if (filtro.tipo === 'precio') {
      if (filtro.valor === '$280.000 — $300.000') res = CERRADURAS.filter(c => c.precio >= 280000 && c.precio <= 300000);
      else if (filtro.valor === '$300.001 — $600.000') res = CERRADURAS.filter(c => c.precio > 300000 && c.precio <= 600000);
      else if (filtro.valor === '$600.001 — $1.000.000') res = CERRADURAS.filter(c => c.precio > 600000 && c.precio <= 1000000);
      else if (filtro.valor === '$1.000.001 — $2.000.000') res = CERRADURAS.filter(c => c.precio > 1000000 && c.precio <= 2000000);
      else if (filtro.valor === 'Más de $2.000.000') res = CERRADURAS.filter(c => c.precio > 2000000);
    } else if (filtro.tipo === 'apertura') {
      // Buscar coincidencia flexible en acceso y descripción
      const val = filtro.valor.toLowerCase();
      if (val.includes('huella') || val.includes('código') || val.includes('clave')) {
        res = CERRADURAS;
      } else {
        res = CERRADURAS.filter(c => {
          const acceso = c.acceso ? c.acceso.toLowerCase() : '';
          const desc = c.desc ? c.desc.toLowerCase() : '';
          if (val.includes('tarjeta')) {
            return acceso.includes('tarjeta') || desc.includes('tarjeta');
          }
          if (val.includes('bluetooth')) {
            return acceso.includes('bluetooth') || desc.includes('bluetooth');
          }
          if (val.includes('llave')) {
            return acceso.includes('llave') || desc.includes('llave');
          }
          if (val.includes('facial')) {
            return acceso.includes('facial') || desc.includes('facial');
          }
          // Búsqueda genérica si no es ninguno de los anteriores
          return acceso.includes(val) || desc.includes(val);
        });
      }
    } else if (filtro.tipo === 'uso') {
      // Buscar coincidencia flexible en la descripción para uso recomendado
      const val = filtro.valor.toLowerCase();
      res = CERRADURAS.filter(c => {
        const desc = c.desc ? c.desc.toLowerCase() : '';
        if (val.includes('hogar') || val.includes('apartamento')) {
          return desc.includes('hogar') || desc.includes('apartamento') || desc.includes('residencial');
        }
        if (val.includes('oficina') || val.includes('negocio')) {
          return desc.includes('oficina') || desc.includes('negocio');
        }
        if (val.includes('porton') || val.includes('garaje')) {
          return desc.includes('porton') || desc.includes('garaje');
        }
        if (val.includes('seguridad')) {
          return desc.includes('seguridad');
        }
        // Búsqueda genérica si no es ninguno de los anteriores
        return desc.includes(val);
      });
    } else if (filtro.tipo === 'nivel') {
      // Coincidencia flexible para nivel (alto, medio, bajo, etc.)
      const val = filtro.valor.toLowerCase();
      res = CERRADURAS.filter(c => {
        const nivel = c.nivel ? c.nivel.toLowerCase() : '';
        // Sinónimos y variantes
        if (val.includes('alto') || val.includes('alta')) {
          return nivel.includes('alto') || nivel.includes('alta');
        }
        if (val.includes('medio') || val.includes('media')) {
          return nivel.includes('medio') || nivel.includes('media');
        }
        if (val.includes('bajo') || val.includes('baja')) {
          return nivel.includes('bajo') || nivel.includes('baja');
        }
        // Búsqueda genérica si no es ninguno de los anteriores
        return nivel.includes(val);
      });
    } else if (filtro.tipo === 'color') {
      const arr = CERRADURAS.filter(c => c.color === filtro.valor);
      if (arr.length > 0) res = [arr[Math.floor(Math.random() * arr.length)]];
    }
    setResultados(res.length > 0 ? res : []);
  };

  const [showMenuBubble, setShowMenuBubble] = useState(true);

  return (
    <div className="App">
      <audio ref={navAudioRef} src={navBurbujaAudio} preload="auto" />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <header className="App-header">
        <div>
          <img src={logo} alt="Logo" className="App-logo-img" />
        </div>
        <h1>Catálogo de Cerraduras</h1>
      </header>
      <nav className="Nav-bar">
        <div style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center'}}>
          {showMenuBubble && (
            <div style={{
              position: 'absolute',
              top: '-56px',
              left: '0',
              transform: 'none',
              background: '#fff',
              color: '#222',
              borderRadius: '16px',
              padding: '8px 18px',
              fontSize: '1rem',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
              zIndex: 100,
              maxWidth: '320px',
              minWidth: '120px',
              width: 'max-content',
              textAlign: 'center',
              border: '1px solid #e0e0e0',
              fontWeight: 500,
              overflowWrap: 'break-word',
              pointerEvents: 'none',
            }}>
              Este es el botón de menú, haz click
            </div>
          )}
          <div className="Nav-menu-icon" onClick={() => {
            setSidebarOpen(true);
            setShowMenuBubble(false);
            if (navAudioRef.current) {
              navAudioRef.current.currentTime = 0;
              navAudioRef.current.play();
            }
          }}>
            <span className="Nav-bar-icon"></span>
            <span className="Nav-bar-icon"></span>
            <span className="Nav-bar-icon"></span>
          </div>
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
        {/* Buscador en nav eliminado */}
      </nav>
      <main className="Catalogo-main">
        {/* Sección independiente para el título */}
        <section className="Catalogo-titulo-section">
          {titulo && (
            <h2 className="Catalogo-titulo-main">{titulo}</h2>
          )}
        </section>
        {/* Filtros dinámicos solo si mostrarFiltro es true */}
        {mostrarFiltro && (
          <section className="Filtros-section">
            <div style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <div style={{
                position: 'absolute',
                top: '-60px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff',
                color: '#111',
                borderRadius: '12px',
                padding: '7px 16px',
                fontWeight: 'bold',
                fontSize: '0.98rem',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                zIndex: 20,
                textAlign: 'center',
                border: '1px solid #e0e0e0',
                maxWidth: '320px',
                minWidth: '120px',
                width: 'max-content',
                pointerEvents: 'none',
              }}>
                Para usar el filtro selecciona una opción en el filtro (solo una) y luego dale en <span style={{color:'#00e6e6'}}>Buscar</span>.
              </div>
              <button className="Filtros-buscar-btn" onClick={buscar}>Buscar</button>
            </div>
            <h2 className="Filtros-title">Filtrar por</h2>
            <div className="Filtros-group">
              <div className="Filtros-group">
                <h3 className="Filtros-subtitle">Marca</h3>
                <hr />
                {['k7','k7plus','k9','k86','T8','j23','a89'].map(m => (
                  <label key={m}><input type="checkbox" checked={filtro.tipo==='marca'&&filtro.valor===m} onChange={()=>handleFiltroChange('marca',m)} /> {m}</label>
                ))}
              </div>
              <h3 className="Filtros-subtitle"> Tipo de tecnología</h3>
              <hr />
                {['Cerraduras Manuales','Cerraduras Inteligentes','Cerraduras Automáticas'].map(tipo => (
                  <label key={tipo}><input type="checkbox" checked={filtro.tipo==='categoria'&&filtro.valor===tipo} onChange={()=>handleFiltroChange('categoria',tipo)} /> {tipo}</label>
                ))}
            </div>
            <div className="Filtros-group">
              <h3 className="Filtros-subtitle"> Precio</h3>
              <hr />
              {['$280.000 — $300.000','$300.000 — $600.000','$600.000 — $1.000.000','$1.000.000 — $2.000.000','Más de $2.000.000'].map(p => (
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
        )}
        {/* Mostrar catálogo filtrado en Home y en /cerradurascodigo */}
        {(location.pathname === '/' || location.pathname === '/cerradurascodigo') ? (
          <div className="Catalogo-lista">
            {resultados.length === 0 && <div style={{textAlign:'center',width:'100%'}}>No se encontraron productos.</div>}
            {resultados.map((c, i) => (
              <div className="Catalogo-card" key={c.key}>
                {c.badge && <span className={`Catalogo-badge Catalogo-badge-${c.badge==='RECOMENDADO'?'recomendado':'masvendido'}`}>{c.badge}</span>}
                {Array.isArray(c.img) ? (
                  <div className="Catalogo-img-multi">
                    {c.img.map((media, idx) => (
                      media.endsWith('.mp4') ? (
                        <video key={idx} className="Catalogo-img Catalogo-img-small" controls poster={c.img[0]} onClick={e => e.target.requestFullscreen()}>
                          <source src={media} type="video/mp4" />
                          Tu navegador no soporta el video.
                        </video>
                      ) : (
                        <img key={idx} src={media} alt={c.nombre + '-' + (idx+1)} className="Catalogo-img Catalogo-img-small" onClick={e => e.target.requestFullscreen()} />
                      )
                    ))}
                  </div>
                ) : (
                  <img src={c.img} alt={c.nombre} className="Catalogo-img Catalogo-img-small" />
                )}
                <h2 className="Catalogo-titulo">{c.nombre}</h2>
                <div className="Catalogo-desc">
                  {c.desc.split('\n').map((line, idx) => (
                    <div key={idx} style={{fontWeight:'bold'}}>{line}</div>
                  ))}
                </div>
                <div className="Catalogo-precios">
                  <span className="Catalogo-precio-tachado">${c.precioTachado.toLocaleString()}</span>
                  <span className="Catalogo-precio">${c.precio.toLocaleString()} COP</span>
                  {c.descuento && <span className="Catalogo-descuento">{c.descuento}</span>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>{children}</>
        )}
      </main>
      <footer className="Catalogo-footer">
        <div className="Footer-columns" style={{position: 'relative', zIndex: 1}}>
          <div className="Footer-col">
            <img src={logo} alt="Logo" className="Footer-logo" />
            <p>Fertec Solutions<br/>NIT: xxxxxxxx</p>
            <p>Celular: <a href="https://wa.me/573108530408" target="_blank" rel="noopener noreferrer">+57 310 853 0408 (WhatsApp)</a></p>
            <p>E-mail: <a href="mailto:fertecsolutions.shop@gmail.com">fertecsolutions.shop@gmail.com</a></p>
            <div className="Footer-social">
              <span> {/*  íconos sociales  */} </span>
            </div>
          </div>
          <div className="Footer-col">
            <h3>Acerca de nosotros</h3>
            <ul>
              <li><a href="/docs/FERTEC SOLUTIONS_Conceptualización.pdf" download> Nuestra empresa </a></li>
              <li><a href="/contactenos">Contáctanos</a></li>
            </ul>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '10px' }}>
              <img src={facebookIcon} alt="Facebook" style={{ width: 32, height: 32 }} />
              <img src={gmailIcon} alt="Gmail" style={{ width: 32, height: 32 }} />
              <img src={instagramIcon} alt="Instagram" style={{ width: 32, height: 32 }} />
            </div>
          </div>
          <div className="Footer-col">
            <h3>Políticas</h3>
            <ul>
              <li><a href="https://www.sic.gov.co/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">Términos y condiciones generales</a></li>
              <li><a href="https://www.bancolombia.com/personas/ayuda/metodos-pago" target="_blank" rel="noopener noreferrer">Métodos y condiciones de pago</a></li>
              <li><a href="https://www.sic.gov.co/politica-de-proteccion-de-datos-personales" target="_blank" rel="noopener noreferrer">Política de protección de datos</a></li>
            </ul>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '10px' }}>
              <img src={nequiIcon} alt="Nequi" style={{ width: 40, height: 28 }} />
              <img src={mastercardIcon} alt="Mastercard" style={{ width: 40, height: 28 }} />
              <img src={daviplataIcon} alt="Daviplata" style={{ width: 40, height: 28 }} />
            </div>
          </div>
          <div className="Footer-col">
            <h3>Soporte</h3>
            <ul>
                <li><a href="https://wa.me/573108530408" target="_blank" rel="noopener noreferrer">Soporte vía WhatsApp</a></li>
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
