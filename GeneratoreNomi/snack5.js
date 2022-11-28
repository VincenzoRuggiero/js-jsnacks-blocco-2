const names = [
  "Michela",
  "Giuseppina",
  "Taylor",
  "Donna",
  "Marsha",
  "Fabio",
  "Roberto",
];
const lastnames = [
  "Cappelletti",
  "Jager",
  "Porcinelli",
  "Buffetti",
  "Forghieri",
  "Papagni",
  "Marazzini",
];

let firstName;
let lastName;

let completeNameArray = [];

for (let i = 0; i < names.length; i++) {
  firstName = names[i];
  for (let i = 0; i < lastnames.length; i++) {
    lastName = lastnames[i];
  }

  completeNameArray.push(`${firstName} + ${lastName}`);

  console.log(completeNameArray);
}
