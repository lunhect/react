export default function ProductoDescuento({ nombre, precio, descuento }) {
  function calcularPrecioFinal() {
    const precioDesuento = (precio * descuento) / 100;

    const precioFinal = precio - precioDesuento;
    return precioFinal;
  }

  return (
    <div>
      <p>Producto {nombre}</p>
      <p>Precio {precio}</p>
      <p>Descuento: {descuento}</p>

      <p>El precio final: {calcularPrecioFinal()} euros</p>
    </div>
  );
}
