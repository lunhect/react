import Pedido from "./components/Pedido";
import Conexion from "./components/Conexion";
import Libro from "./components/Libro";
import Caja from "./components/Caja";
import Boton from "./components/Boton";
import Nota from "./components/Nota";
import Etiqueta from "./components/Etiqueta";
import './App.css'
import ProductoDescuento  from "./components/ProductoDescuento";
import Usuario from "./components/Usuario";
function App() {
  return (
    <>
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
      <ProductoDescuento nombre='Maximiliano capilar' precio={69.67} descuento={20}  />
      <Usuario nombre="Clemente" rol="Programador" />
    </>
);

}
export default App
