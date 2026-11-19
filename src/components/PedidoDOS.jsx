export default function Pedido2({ producto, cantidad, precio }) {

  function calcularTotal() {

   const totalPrecio = cantidad * precio;

    return totalPrecio;


  }

  return (
    <div>
      <p> Producto: {producto}</p>
      <p> Cantindad: {cantidad}</p>
      <p> Precio: { precio}</p>


    <p>Total: {calcularTotal()} Euros </p>



    </div>







  );





}
