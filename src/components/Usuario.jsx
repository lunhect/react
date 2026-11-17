export default function Usuario({ nombre, rol }) {
  function obtenerMensaje() {
    return `${ nombre } - ${ rol }`;
  }
  return <p>{obtenerMensaje()}</p>;

}
