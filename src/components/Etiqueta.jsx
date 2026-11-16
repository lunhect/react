function Etiqueta({nivel}) {

const colores = { bajo: "green", medio: "yellow", alto: "red"}
const fondo = colores[nivel]
  return (
<p style={{ background : fondo}}></p>
  );



}

export default Etiqueta;
