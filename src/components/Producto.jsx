function Producto({ nombre, precio, disponible }) {
  if (disponible) {
    return (
      <div>
        <p>Producto: {nombre}</p>
        <p>Precio: {precio}</p>
        <p style={{ color: "green" }}>En Stock</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Producto: {nombre}</p>
        <p style={{ color: "red" }}>Agotado</p>
      </div>
    );
  }
}
export default Producto;
