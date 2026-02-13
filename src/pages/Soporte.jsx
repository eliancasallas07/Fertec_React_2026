
import Layout from '../Layout';
import whatsappIcon from '../img/whatsapp-icon.png';

const Soporte = () => (
  <Layout titulo="Soporte" mostrarFiltro={false}>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh', textAlign: 'center' }}>
      <h2>Soporte</h2>
      <p style={{marginTop:'20px', fontSize: '1.1rem'}}>Para soporte, contáctanos por WhatsApp:</p>
      <a href="https://wa.me/573108530408" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '1.1rem', textDecoration: 'underline', marginTop: '8px', justifyContent: 'center'}}>
        <img src={whatsappIcon} alt="WhatsApp" style={{width: 22, height: 22, verticalAlign: 'middle'}} />
        +57 310 853 0408 (WhatsApp)
      </a>
    </div>
  </Layout>
);

export default Soporte;
