
import Layout, { CERRADURAS } from '../Layout';

const CerradurasBluetooth = () => {
  const bluetoothCerraduras = CERRADURAS.filter(c => {
    const acceso = c.acceso ? c.acceso.toLowerCase() : '';
    const desc = c.desc ? c.desc.toLowerCase() : '';
    return acceso.includes('bluetooth') || desc.includes('bluetooth');
  });
  return (
    <Layout titulo="Cerraduras Bluetooth" mostrarFiltro={false}>
      <div className="Catalogo-lista">
        {bluetoothCerraduras.length === 0 && <div style={{textAlign:'center',width:'100%'}}>No se encontraron productos.</div>}
        {bluetoothCerraduras.map((c, i) => (
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
      {/* Filtro eliminado en esta interfaz */}
    </Layout>
  );
};

export default CerradurasBluetooth;
