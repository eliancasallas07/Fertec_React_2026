
import Layout from '../Layout';
import k7Img from '../img/k7.jpeg';
import k7Img2 from '../img/k7-2.jpeg';


const CERRADURAS = [
  {
    key: 'k9',
    nombre: 'Cerradura K9',
    imgs: [require('../img/k9.jpeg'), require('../img/k9-2.jpeg'), require('../videos/k9-3.mp4')],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Puede ser instalada en puertas de madera y metal.<br />
        Ideal para casas residenciales y apartamentos.<br />
      </>
    ),
    precioTachado: 850000,
    precio: 700000,
    descuento: '-18%'
  },
  {
    key: 'k7',
    nombre: 'Cerradura K7 Plus',
    imgs: [k7Img, k7Img2, k7Img],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Puede ser instalada en puertas de madera y metal.<br />
        Incluye Cámara y pantalla.<br />
        Cuenta con batería de litio recargable.<br />
      </>
    ),
    precioTachado: 850000,
    precio: 700000,
    descuento: '-18%'
  }
];

const CerradurasManual = () => (
  <Layout titulo="Cerraduras Manuales">
    <div className="Catalogo-lista">
      {CERRADURAS.map(c => (
        <div key={c.key} className="Catalogo-card">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',marginBottom:'10px'}}>
            {c.imgs.map((img, idx) => (
              <img key={idx} src={img} alt={c.nombre + '-' + (idx+1)} className="Catalogo-img Catalogo-img-small" />
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

export default CerradurasManual;
