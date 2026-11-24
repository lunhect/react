export default function CampoTexto({ tipo = "text", etiqueta = "" }) {
  return (
    <div className="grupo-campo">
      <label>{etiqueta}</label>
      <input type={tipo} placeholder={etiqueta} />
    </div>
  );
}
