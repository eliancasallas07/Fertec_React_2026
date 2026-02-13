
import Layout from '../Layout';
import whatsappIcon from '../img/whatsapp-icon.png';

const Contactenos = () => (
  <Layout titulo="Contáctenos" mostrarFiltro={false}>
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '32px 0 0 32px' }}>
      <h2>Contáctenos</h2>
      <p style={{marginTop:'20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem'}}>
        Celular:
        <a href="https://wa.me/573108530408" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'underline'}}>
          <img src={whatsappIcon} alt="WhatsApp" style={{width: 22, height: 22, verticalAlign: 'middle'}} />
          +57 310 853 0408 (WhatsApp)
        </a>
      </p>
    </div>
    {/* Filtro eliminado en esta interfaz */}
  </Layout>
);

export default Contactenos;
