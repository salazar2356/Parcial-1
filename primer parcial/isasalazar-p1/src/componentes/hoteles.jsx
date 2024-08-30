import React from "react";
import { planDeViajes } from "../data"; 

function PlanHoteles({ titulo, selectedHotel, setSelectedHotel }) {
  const hoteles = planDeViajes.hoteles;

  return (
    <section>
      <h1>{titulo}</h1>
      {hoteles.map((item, index) => (
        <button 
          key={index} 
          style={{ display: "block", margin: "10px 0", backgroundColor: selectedHotel === item ? 'lightblue' : 'white' }}
          onClick={() => setSelectedHotel(item)} // CON ESTO ME ACTUALIZO EL ESTADO
        >
          <h2>{item.nombre}</h2>
          <p>Costo: ${item.costo}</p>
          <p>Estrellas: {item.estrellas}</p>
          <p>Ubicación: {item.ubicacion}</p>
          <p>Servicios: {item.servicios.join(", ")}</p>
          <img src={item.imagen} alt={item.nombre} style={{ width: "100px", height: "100px" }} />
        </button>
      ))}
      {selectedHotel && <p>Hotel seleccionado: {selectedHotel.nombre} $: {selectedHotel.costo} </p>}
    </section>
  );
}

export default PlanHoteles;
