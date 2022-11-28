const listaSpesa = ["arance", "latte", "pasta", "pane", "zucchero"];
const list = document.querySelector(".list");

let i;

while (i < listaSpesa.length) {
  let product = document.createElement("li");
  product.innerHTML = listaSpesa[i];

  list.appendChild(product);
}
