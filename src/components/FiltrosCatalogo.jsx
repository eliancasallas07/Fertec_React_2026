import React from 'react';

const FiltrosCatalogo = ({ filtro, setFiltro, buscar }) => {
  // Manejar selección de checkbox (solo uno a la vez)
  const handleFiltroChange = (tipo, valor) => {
    setFiltro({ tipo, valor });
  };

  return (
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
  );
};

export default FiltrosCatalogo;
