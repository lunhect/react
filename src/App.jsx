import Pedido from "./components/Pedido";
import Conexion from "./components/Conexion";
import Perfil from "./components/Perfil";
import Libro from "./components/Libro";
import Caja from "./components/Caja";
import Boton from "./components/Boton";
import Nota from "./components/Nota";
import Etiqueta from "./components/Etiqueta";
import './App.css'

function App() {
  return (
    <>
      <Perfil nombre="Ana" edad={20} />
      <Conexion conectado />
      <Libro titulo="El principito" precio={12} disponibilidad={true} />
      <Libro titulo="El principito" precio={12} disponibilidad={false} />
      <Caja ancho={20} />
      <Caja ancho={60} />
      <Caja ancho={100} />
      <Nota valor={3} />
      <Nota valor={5} />
      <Boton texto="Hola" />
      <Boton texto="Uwu" color="Red" />
      <Etiqueta nivel="bajo" />
      <Pedido estado="pendiente" />

    </>
);

}
export default App
