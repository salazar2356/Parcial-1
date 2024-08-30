import React from "react";
import { planDeViajes } from "../data"; 

function PlanAlimentos({ titulo, selectedAlimento, setSelectedAlimento }) {
  const alimentacion = planDeViajes.alimentacion;

  return (
    <section>
      <h1>{titulo}</h1>
      {alimentacion.map((item, index) => (
        <button 
          key={index} 
          style={{ display: "block", margin: "10px 0", backgroundColor: selectedAlimento === item ? 'lightblue' : 'white' }}
          onClick={() => setSelectedAlimento(item)} // CON ESTO ME ACTUALIZO EL ESTADO
        >
          <h2>{item.titulo}</h2>
          <p>Precio: ${item.precio}</p>
          <img src={item.imagen} alt={item.titulo} style={{ width: "100px", height: "100px" }} />
        </button>
      ))}
      {selectedAlimento && <p>Alimento seleccionado: {selectedAlimento.titulo} $: {selectedAlimento.precio}
        
        </p>
        }
    </section>
  );
}

export default PlanAlimentos;
