import "./Login.css";
import Boton from "./Boton";
import CampoTexto from "./CampoTexto";

export default function Login() {
  function manejarEnvio(evento) {
    evento.preventDefault();
    alert("Iniciando sesión...");
  }

  function manejarCancelar() {
    alert("Operación cancelada");
  }

  return (
    <form className="contenedor-login" onSubmit={manejarEnvio}>
      <h2>Iniciar Sesión</h2>

      <CampoTexto etiqueta="Usuario" placeholder="Introduce tu usuario" />
      <CampoTexto
        etiqueta="Contraseña"
        tipo="password"
        placeholder="Introduce tu contraseña"
      />

      <Boton tipo="submit" />

      <Boton texto="Cancelar" clase="btn-secundario" onClick={manejarCancelar} />
    </form>
  );
}
