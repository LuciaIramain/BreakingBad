import React, {useState} from "react";
import './app.css';
import Frase from "./components/Frase";

function App() {

  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  return (
    <div className="contenedor">
      <Frase 
        frase={frase}
      />
     <button className="boton" type="submit" onClick={consultarAPI}>Obtener Frase</button>
    </div>
  );
}

export default App;
