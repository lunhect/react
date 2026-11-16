function Conexion({ conectado }) {
  return (
    <p style={{ color: conectado ? "green" : "red" }}>
      {conectado ? "conectado" : "desconectado"}
    </p>
  );
}
export default Conexion;
