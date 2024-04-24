import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  // Declara el estado count y la función setCount utilizando useState
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "Bienvenidos al mundo de los libros" />
    </div>
  );
}

export default App
