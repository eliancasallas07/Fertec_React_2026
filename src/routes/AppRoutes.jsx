import { Routes, Route } from "react-router-dom";
import Instaladores from "../pages/Instaladores";
import Home from "../pages/Home";
import DescargaCatalogos from "../pages/DescargaCatalogos";
import Contactanos from "../pages/Contactenos";
import CerradurasTarjeta from "../pages/CerradurasTarjeta";
import CerradurasInteligentes from "../pages/CerradurasInteligentes";
import CerradurasHuella from "../pages/CerradurasHuella";
import CerradurasDigitales from "../pages/CerradurasDigitales";
import CerradurasCodigo from "../pages/CerradurasCodigo";
import CerradurasBluetooth from "../pages/CerradurasBluetooth";
import CerradurasManual from "../pages/CerradurasManual";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/instaladores" element={<Instaladores />} />
    <Route path="/descarga_catalogos" element={<DescargaCatalogos />} />
    <Route path="/contactenos" element={<Contactanos />} />
    <Route path="/cerraduras_tarjeta" element={<CerradurasTarjeta />} />
    <Route path="/cerraduras_inteligentes" element={<CerradurasInteligentes />} />
    <Route path="/cerraduras_huella" element={<CerradurasHuella />} />
    <Route path="/cerraduras_digitales" element={<CerradurasDigitales />} />
    <Route path="/cerraduras_codigo" element={<CerradurasCodigo />} />
    <Route path="/cerraduras_bluetooth" element={<CerradurasBluetooth />} />
    <Route path="/cerraduras_manual" element={<CerradurasManual />} />
  </Routes>

);

export default AppRoutes;
