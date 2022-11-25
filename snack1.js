const array = [];

for (let i = 0; i < 6; i++) {
  let user = prompt("Inserisci un numero");

  if (user % 2 == 1) {
    array.push(user);
  }
}

console.log(array);
