export default function Alert({ tipo, mostrarIcono = false }) {
  const config = {
    info: { fondo: "blue", icono: "ℹ️" },

    error: { fondo: "red", icono: "❌" },

    exito: { fondo: "green", icono: "✅" },
  };

  const { fondo, icono } = config[tipo];

  return (
    <div style={{ backgroundcolor: fondo }}>
      <p>{icono && mostrarIcono}</p>
    </div>
  );
}
