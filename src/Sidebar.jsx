import { Link } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => (
  <div className={`Sidebar${open ? ' open' : ''}`}>  
    <button className="Sidebar-close" onClick={onClose}>×</button>
    <ul className="Sidebar-list">
      <li><Link to="/contactenos" onClick={onClose}>Contáctanos</Link></li>
      <li><Link to="/cerraduras_bluetooth" onClick={onClose}>Cerraduras Bluetooth</Link></li>
      <li><Link to="/cerraduras_codigo" onClick={onClose}>Cerraduras Código</Link></li>
      <li><Link to="/cerraduras_digitales" onClick={onClose}>Cerraduras Digitales</Link></li>
      <li><Link to="/cerraduras_huella" onClick={onClose}>Cerraduras Huella</Link></li>
      <li><Link to="/cerraduras_inteligentes" onClick={onClose}>Cerraduras Inteligentes</Link></li>
      <li><Link to="/cerraduras_manual" onClick={onClose}>Cerraduras Manual</Link></li>
      <li><Link to="/cerraduras_tarjeta" onClick={onClose}>Cerraduras Tarjeta</Link></li>
      <li><Link to="/descarga_catalogos" onClick={onClose}>Descarga de Catálogos</Link></li>
      <li><Link to="/instaladores" onClick={onClose}>Directorio de Instaladores</Link></li>
    </ul>
  </div>
);

export default Sidebar;
