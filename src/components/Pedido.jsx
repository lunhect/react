function Pedido({ estado }) {
  const valores = { pendiente: "orange", enviado: "pink", entregado: "green" };
  const estadoPaquete = valores[estado] || "gray";
  return (
    <p style={{ color: estadoPaquete }}>El estado del paquete es {estado}</p>
  );
}

export default Pedido;
