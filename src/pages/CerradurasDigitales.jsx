
// import Layout from '../Layout';
// import cerraduraBluetooth from '../img/cerradura_bluetooth.png';
// import cerraduraDigital from '../img/cerradura_digital.png';
// import cerraduraHuella from '../img/cerradura_huella.png';
// import cerraduraInteligente from '../img/cerradura_inteligente.png';
// import cerraduraTarjeta from '../img/cerradura_tarjeta.png';


import Layout from '../Layout';
import j23Video from '../videos/j23.mp4';
import j23Video2 from '../videos/j23-2.mp4';
import j23Video3 from '../videos/j23-3.mp4';
import a89Img from '../img/a89.jpeg';
import a89Img2 from '../img/a89-2.jpeg';
import a89Img3 from '../img/a89-3.jpeg';

const CERRADURAS = [
  {
    key: 'j23',
    nombre: 'Cerradura J23',
    imgs: [j23Video, j23Video2, j23Video3],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Cerradura digital con huella y código.<br />
        Ideal para apartamentos.<br />
      </>
    ),
    precioTachado: 800000,
    precio: 650000,
    descuento: '-19%'
  },
  {
    key: 'a89',
    nombre: 'Cerradura A89',
    imgs: [a89Img, a89Img2, a89Img3],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Cerradura digital con video.<br />
        Instalación profesional.<br />
      </>
    ),
    precioTachado: 1800000,
    precio: 1500000,
    descuento: '-17%'
  }
];

const CerradurasDigitales = () => (
  <Layout titulo="Cerraduras Digitales" mostrarFiltro={false}>
    <div className="Catalogo-lista">
      {CERRADURAS.map(c => (
        <div key={c.key} className="Catalogo-card">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',marginBottom:'10px'}}>
            {c.imgs.map((img, idx) => (
              img.endsWith('.mp4') ? (
                <video key={idx} className="Catalogo-img Catalogo-img-small" controls>
                  <source src={img} type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
              ) : (
                <img key={idx} src={img} alt={c.nombre + '-' + (idx+1)} className="Catalogo-img Catalogo-img-small" />
              )
            ))}
          </div>
          <h2 className="Catalogo-titulo">{c.nombre}</h2>
          <div className="Catalogo-desc" style={{marginBottom:'8px'}}>{c.desc}</div>
          <div className="Catalogo-precios">
            <span className="Catalogo-precio-tachado" style={{marginRight:'8px'}}>${c.precioTachado.toLocaleString()}</span>
            <span className="Catalogo-precio" style={{marginRight:'8px',color:'#0077cc',fontWeight:'bold'}}>${c.precio.toLocaleString()} COP</span>
            <span className="Catalogo-descuento">{c.descuento}</span>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default CerradurasDigitales;
