function Libro({ titulo, precio, disponibilidad }) {
  const stock = disponibilidad ? "disponible" : "agotado";

  return (
    <div>
      <p>Titulo: {titulo}</p>

      <p>Stock: {stock}</p>

      {disponibilidad && <p> precio: {precio} </p>}
    </div>
  );
}

export default Libro;
