

# 🚀 Catálogo de Cerraduras - React 2026

📋 **Descripción del Proyecto**

Aplicación web desarrollada con React para mostrar un catálogo interactivo de cerraduras inteligentes, digitales, biométricas y más. Permite explorar productos, filtrar por categorías y contactar a la empresa fácilmente.

---

✨ **Funcionalidades Implementadas**

🗂️ Catálogo de Productos

- ✅ Visualización de cerraduras por tipo (Bluetooth, Código, Digital, Huella, Inteligente, Tarjeta)
- ✅ Filtros por categoría desde barra lateral
- ✅ Página de inicio con destacados
- ✅ Imágenes y descripciones de cada producto
- ✅ Sección de descarga de catálogos en PDF

📞 Contacto y Soporte

- ✅ Formulario de contacto funcional
- ✅ Página de instaladores recomendados
- ✅ Información de contacto visible

🖥️ Interfaz y Navegación

- ✅ Navegación SPA con React Router
- ✅ Sidebar de navegación responsiva
- ✅ Diseño moderno y adaptable a dispositivos móviles

---

🏗️ **Arquitectura Técnica**

- ✅ React 18+ con componentes funcionales y hooks
- ✅ React Router para navegación entre páginas
- ✅ Estructura modular: componentes, páginas y rutas separadas
- ✅ CSS modularizado para estilos personalizados
- ✅ Imágenes y recursos organizados en carpetas dedicadas

---

🔧 **Stack Técnico**

| Tecnología   | Versión | Propósito                        |
|--------------|---------|----------------------------------|
| React        | 18+     | Frontend SPA                     |
| JavaScript   | ES6+    | Lógica de la aplicación          |
| HTML5/CSS3   | -       | Estructura y estilos             |
| Node.js/NPM  | 16+     | Gestión de dependencias y scripts|
| **Firebase** | latest  | Hosting, despliegue y servicios  |

---

## ☁️ Integración con Firebase

El proyecto está preparado para ser desplegado fácilmente en Firebase Hosting. Puedes aprovechar Firebase para:

- Hosting de la aplicación web
- (Opcional) Autenticación de usuarios
- (Opcional) Almacenamiento de archivos o base de datos en tiempo real

Para desplegar:
1. Instala Firebase CLI si no la tienes:  
	npm install -g firebase-tools
2. Inicia sesión:  
	firebase login
3. Inicializa Firebase en el proyecto (si no está hecho):  
	firebase init
4. Despliega:  
	firebase deploy

El archivo `firebase.json` ya está incluido para configuración básica de hosting.

---

📁 **Estructura del Proyecto**

fertec_react_2026/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.jsx                # Componente principal
│   ├── index.js               # Punto de entrada
│   ├── Layout.jsx             # Layout general
│   ├── Sidebar.jsx            # Barra lateral de navegación
│   ├── pages/                 # Páginas del catálogo
│   │   ├── Home.jsx
│   │   ├── CerradurasBluetooth.jsx
│   │   ├── CerradurasCodigo.jsx
│   │   ├── CerradurasDigitales.jsx
│   │   ├── CerradurasHuella.jsx
│   │   ├── CerradurasInteligentes.jsx
│   │   ├── CerradurasTarjeta.jsx
│   │   ├── Contactanos.jsx
│   │   ├── Contactenos.jsx
│   │   ├── DescargaCatalogos.jsx
│   │   └── Instaladores.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx      # Definición de rutas
│   └── img/                   # Imágenes de productos
├── package.json
├── firebase.json              # Configuración de Firebase Hosting
├── README.md
  

---

🔐 **Buenas Prácticas y Seguridad**

- Validación básica de formularios de contacto
- Separación de lógica y presentación
- Estructura escalable y mantenible

---

🚀 **Funcionalidades por Implementar**

- Buscador de productos por nombre o referencia
- Integración con backend para productos dinámicos
- Panel de administración para gestión de catálogo

---

💻 **Instalación y Configuración**

**Prerequisitos**

- Node.js 16+
- NPM 8+
- Navegador web moderno

**Pasos de Instalación**

1. Clonar el repositorio en tu máquina local
2. Instalar dependencias:  
	npm install
3. Iniciar el servidor de desarrollo:  
	npm start
4. Acceder a http://localhost:3000 en tu navegador

---

🧪 **Testing**

- ✅ Navegación entre páginas verificada
- ✅ Visualización de productos y categorías funcional
- ✅ Formulario de contacto probado

---

📝 **Notas de Desarrollo**

Este proyecto es parte de un portafolio profesional, desarrollado con enfoque en:

- Buenas prácticas de React y JavaScript moderno
- Código limpio y modular
- Experiencia de usuario intuitiva y profesional

Desarrollado con ❤️ en React

Última actualización: Febrero 2026

---



