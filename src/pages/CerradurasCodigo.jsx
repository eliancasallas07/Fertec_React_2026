
import Layout from '../Layout';
import t8Img from '../img/t8.jpeg';
import t8Img2 from '../img/t8-2.jpeg';
import j23Video from '../videos/j23.mp4';
import j23Video2 from '../videos/j23-2.mp4';
import j23Video3 from '../videos/j23-3.mp4';
import a89Img from '../img/a89.jpeg';
import a89Img2 from '../img/a89-2.jpeg';
import a89Img3 from '../img/a89-3.jpeg';

const CERRADURAS = [
  {
    key: 't8',
    nombre: 'Cerradura T8',
    imgs: [t8Img, t8Img2],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Cerradura con código y huella.<br />
        Instalación sencilla.<br />
      </>
    ),
    precioTachado: 350000,
    precio: 280000,
    descuento: '-20%'
  },
  {
    key: 'j23',
    nombre: 'Cerradura J23',
    imgs: [j23Video, j23Video2, j23Video3],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Cerradura con código y huella.<br />
        Ideal para apartamentos.<br />
      </>
    ),
    precioTachado: 800000,
    precio: 650000,
    descuento: '-19%'
  },
  {
    key: 'a89',
    nombre: 'Cerradura A89',
    imgs: [a89Img, a89Img2, a89Img3],
    desc: (
      <>
        <strong>Color:</strong> Negro.<br />
        Cerradura con video.<br />
        Instalación profesional.<br />
      </>
    ),
    precioTachado: 1800000,
    precio: 1500000,
    descuento: '-17%'
  }
];

const CerradurasCodigo = () => (
  <Layout titulo="Cerraduras con Código" />
);

export default CerradurasCodigo;
