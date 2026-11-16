export default function BarraProgreso({ porcentaje }) {
  if (porcentaje < 50) {
    return (
      <div
        style={{
          width: `${porcentaje}`,
          height: 30,
          backgroundColor: "amarilla",
        }}
      />
    );
  } else if (porcentaje >= 50) {
    return (
      <div
        style={{ width: `${porcentaje}`, height: 30, backgroundColor: "verde" }}
      />
    );
  }
}
