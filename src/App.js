
import './App.css';

function App() {
  // Catálogo de cerraduras de ejemplo
  const cerraduras = [
    { id: 1, nombre: 'Cerradura Digital', descripcion: 'Cerradura inteligente con acceso por huella y app.', precio: '$120' },
    { id: 2, nombre: 'Cerradura Tradicional', descripcion: 'Cerradura mecánica de alta seguridad.', precio: '$45' },
    { id: 3, nombre: 'Cerradura Electrónica', descripcion: 'Cerradura con teclado numérico y alarma.', precio: '$80' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Catálogo de Cerraduras</h1>
      </header>
      <main style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {cerraduras.map((cerradura) => (
            <div key={cerradura.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', width: '250px', background: '#fff' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{cerradura.nombre}</h2>
              <p>{cerradura.descripcion}</p>
              <p style={{ fontWeight: 'bold', color: '#1976d2' }}>{cerradura.precio}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <h1>Catálogo de Cerraduras</h1>
      </footer>
      
    </div>
  );
}

export default App;
