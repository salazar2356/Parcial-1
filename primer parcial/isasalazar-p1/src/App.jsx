import { useState } from 'react';
import PlanAlimentos from './componentes/plans';
import PlanHoteles from './componentes/hoteles';
import PlanDestinos from './componentes/destinosdla';

function App() {
  const [selectedAlimento, setSelectedAlimento] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedDestino, setSelectedDestino] = useState(null);

  const calcularTotal = () => {
    const totalAlimentos = selectedAlimento ? selectedAlimento.precio : 0;
    const totalHoteles = selectedHotel ? selectedHotel.costo : 0;
    const totalDestinos = selectedDestino ? selectedDestino.precio : 0;
    return totalAlimentos + totalHoteles + totalDestinos;
  };

  return (
    <>
      <div>
        <h1>¡Arma tu viaje!</h1>
        <PlanAlimentos 
          titulo="Planes de Alimentación" 
          selectedAlimento={selectedAlimento} 
          setSelectedAlimento={setSelectedAlimento} 
        />
        <PlanHoteles 
          titulo="Planes de Hoteles" 
          selectedHotel={selectedHotel} 
          setSelectedHotel={setSelectedHotel} 
        />
        <PlanDestinos 
          titulo="Planes de Destinos" 
          selectedDestino={selectedDestino} 
          setSelectedDestino={setSelectedDestino} 
        />
         <h2>Total: ${calcularTotal()}</h2>
      </div>
    </>
  );
}

export default App;
