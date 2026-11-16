function Nota({ valor }) {
  return <p style={{ color: valor >= 5 ? "green" : "red" }}>{valor}</p>;
}

export default Nota;
