
import Layout, { CERRADURAS } from '../Layout';

const CerradurasHuella = () => {
  // Mostrar todas las cerraduras del catálogo
  const cerraduras = CERRADURAS;
  return (
    <Layout titulo="Cerraduras con Huella" mostrarFiltro={false}>
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
              <span className="Catalogo-precio-tachado" style={{marginRight:'8px'}}>${c.precioTachado.toLocaleString()}</span>
              <span className="Catalogo-precio" style={{marginRight:'8px',color:'#0077cc',fontWeight:'bold'}}>${c.precio.toLocaleString()} COP</span>
              <span className="Catalogo-descuento">{c.descuento}</span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CerradurasHuella;
