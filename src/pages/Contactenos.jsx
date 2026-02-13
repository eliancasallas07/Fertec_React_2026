import Layout from '../Layout';

const Contactenos = () => (
  <Layout titulo="Contáctenos" mostrarFiltro={false}>
    <div className="PageCentered">
      <h2>Contáctenos</h2>
      {/* Texto eliminado por solicitud */}
      <p style={{marginTop:'20px'}}>
        Celular: <a href="https://wa.me/573108530408" target="_blank" rel="noopener noreferrer">+57 310 853 0408 (WhatsApp)</a>
      </p>
    </div>
    {/* Filtro eliminado en esta interfaz */}
  </Layout>
);

export default Contactenos;
