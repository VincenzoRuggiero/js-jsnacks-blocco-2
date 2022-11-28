const listaSpesa = ["arance", "latte", "pasta", "pane", "zucchero", "pesce"];
const list = document.querySelector(".list");

let i = 0;

while (i < listaSpesa.length) {
  let product = document.createElement("li");
  product.innerText = listaSpesa[i];

  list.appendChild(product);

  i++;
}
