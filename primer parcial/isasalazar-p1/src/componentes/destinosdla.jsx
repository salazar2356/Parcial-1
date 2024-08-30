import React from "react";
import { planDeViajes } from "../data"; 

function PlanDestinos({ titulo, selectedDestino, setSelectedDestino }) {
  const destinosdlaArray = Object.values(planDeViajes.destinosdla);

  return (
    <section>
      <h1>{titulo}</h1>
      {destinosdlaArray.map((destino, index) => (
        <button 
          key={index} 
          style={{ display: "block", margin: "10px 0", backgroundColor: selectedDestino === destino ? 'lightblue' : 'white' }}
          onClick={() => setSelectedDestino(destino)} // CON ESTO ME ACTUALIZO EL ESTADO
        >
          <h2>{destino.nombre}</h2>
          <p>Precio: ${destino.precio}</p>
          <img src={destino.imagen} alt={destino.nombre} style={{ width: "100px", height: "100px" }} />
        </button>
      ))}
      {selectedDestino && <p>Destino seleccionado: {selectedDestino.nombre}$: {selectedDestino.precio}</p>}
    </section>
  );
}

export default PlanDestinos;
