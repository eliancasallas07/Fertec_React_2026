

import Layout, { CERRADURAS } from '../Layout';
const CerradurasCodigo = () => {
  // Filtrar solo las cerraduras con código
  const cerraduras = CERRADURAS.filter(c => c.acceso && (c.acceso.toLowerCase().includes('código') || c.acceso.toLowerCase().includes('clave')));
  return (
    <Layout titulo="Cerraduras con Código">
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
              <span className="Catalogo-descuento">{c.descuento}</span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CerradurasCodigo;
