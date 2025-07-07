const form = document.getElementById("cotizador-form");
const totalSpan = document.getElementById("total");

form.addEventListener("change", () => {
  const duracion = parseInt(document.getElementById("duracion").value);
  const camaras = parseInt(document.getElementById("camaras").value);
  const formato = parseInt(document.getElementById("formato").value);
  const dron = parseInt(document.getElementById("dron").value);
  const edicion = parseInt(document.getElementById("edicion").value);
  const entrega = parseInt(document.getElementById("entrega").value);

  const total = duracion + camaras + formato + dron + edicion + entrega;

  totalSpan.textContent = `$${total.toLocaleString("es-CL")}`;
});
