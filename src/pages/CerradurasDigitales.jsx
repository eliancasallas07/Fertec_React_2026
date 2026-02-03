
import Layout from '../Layout';
import cerraduraBluetooth from '../img/cerradura_bluetooth.png';
import cerraduraDigital from '../img/cerradura_digital.png';
import cerraduraHuella from '../img/cerradura_huella.png';
import cerraduraInteligente from '../img/cerradura_inteligente.png';
import cerraduraTarjeta from '../img/cerradura_tarjeta.png';

const CerradurasDigitales = () => (
  <Layout titulo="Cerraduras Digitales">
    <div className="CerradurasDigitales-grid">
      <div className="CerraduraCard">
        <img src={cerraduraBluetooth} alt="Cerradura Bluetooth" />
        <p>Cerradura Bluetooth</p>
      </div>
      <div className="CerraduraCard">
        <img src={cerraduraDigital} alt="Cerradura Digital" />
        <p>Cerradura Digital</p>
      </div>
      <div className="CerraduraCard">
        <img src={cerraduraHuella} alt="Cerradura Huella" />
        <p>Cerradura Huella</p>
      </div>
      <div className="CerraduraCard">
        <img src={cerraduraInteligente} alt="Cerradura Inteligente" />
        <p>Cerradura Inteligente</p>
      </div>
      <div className="CerraduraCard">
        <img src={cerraduraTarjeta} alt="Cerradura Tarjeta" />
        <p>Cerradura Tarjeta</p>
      </div>
    </div>
  </Layout>
);

export default CerradurasDigitales;
