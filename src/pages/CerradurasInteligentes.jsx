
// import eliminado, se deja solo la importación con destructuring más abajo
import k7plusImg from '../img/k7.jpeg';
import k86Img from '../img/k86.jpeg';
import k86Img2 from '../img/k86-2.jpeg';
import t8Img from '../img/t8.jpeg';
import t8Img2 from '../img/t8-2.jpeg';
import j23Video from '../videos/j23.mp4';
import j23Video2 from '../videos/j23-2.mp4';
import Layout, { CERRADURAS } from '../Layout';

const CerradurasInteligentes = () => {
  // Filtrar solo las cerraduras inteligentes
  const cerraduras = CERRADURAS.filter(c => c.categoria === 'Cerraduras Inteligentes');
  return (
    <Layout titulo="Cerraduras Inteligentes">
      <div className="Catalogo-lista">
        {cerraduras.map(c => (
          <div key={c.key} className="Catalogo-card">
            {Array.isArray(c.img) ? (
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',marginBottom:'10px'}}>
                {c.img.map((img, idx) => (
                  img.endsWith('.mp4') ? (
                    <video key={idx} className="Catalogo-img Catalogo-img-small" controls poster={c.img[0]} onClick={e => e.target.requestFullscreen()}>
                      <source src={img} type="video/mp4" />
                      Tu navegador no soporta el video.
                    </video>
                  ) : (
                    <img key={idx} src={img} alt={c.nombre + '-' + (idx+1)} className="Catalogo-img Catalogo-img-small" onClick={e => e.target.requestFullscreen()} />
                  )
                ))}
              </div>
            ) : (
              <img src={c.img} alt={c.nombre} className="Catalogo-img Catalogo-img-small" />
            )}
            <h2 className="Catalogo-titulo">{c.nombre}</h2>
            <div className="Catalogo-desc" style={{marginBottom:'8px'}}>
              {c.desc.split('\n').map((line, idx) => (
                <div key={idx} style={{fontWeight:'bold'}}>{line}</div>
              ))}
            </div>
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
};

export default CerradurasInteligentes;
