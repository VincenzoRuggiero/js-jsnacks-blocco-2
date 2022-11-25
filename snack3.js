const array = [3, 4, 7, 10, 2, 5, 9, 8, 2, 6];

let sum = 0;
let max = 0;
for (let i = 0; i < 10; i++) {
  sum += array[i];

  if (array[i] > max) {
    max = array[i];
  }
}

let media = sum / 10;

console.log(max);
console.log(`${sum} ${media}`);
