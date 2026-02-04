
import Layout from '../Layout';
import t8Img from '../img/t8.jpeg';
import t8Img2 from '../img/t8-2.jpeg';
import j23Img from '../img/j23.jpeg';
import j23Img2 from '../img/j23-2.jpeg';
import a89Video from '../videos/a89.mp4';

const CERRADURAS = [
  {
    key: 't8',
    nombre: 'Cerradura T8',
    imgs: [t8Img, t8Img2],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Cerradura con código y huella.<br />
        Instalación sencilla.<br />
      </>
    ),
    precioTachado: 350000,
    precio: 280000,
    descuento: '-20%'
  },
  {
    key: 'j23',
    nombre: 'Cerradura J23',
    imgs: [j23Img, j23Img2],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Cerradura con código y huella.<br />
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
    imgs: [a89Video],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Cerradura con video.<br />
        Instalación profesional.<br />
      </>
    ),
    precioTachado: 1800000,
    precio: 1500000,
    descuento: '-17%'
  }
];

const CerradurasCodigo = () => (
  <Layout titulo="Cerraduras con Código">
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
            <span className="Catalogo-precio-tachado" style={{marginRight:'8px',color:'#b0b0b0',textDecoration:'line-through'}}>${c.precioTachado.toLocaleString()}</span>
            <span className="Catalogo-precio" style={{marginRight:'8px',color:'#0077cc',fontWeight:'bold'}}>${c.precio.toLocaleString()} COP</span>
            <span style={{color:'#e53935',fontWeight:'bold'}}>{c.descuento}</span>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default CerradurasCodigo;
