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

let name;
let lastname;

let completeNameArray = [];

for (let i = 0; i < names.length; i++) {
  name = names[i];
  for (let i = 0; i < lastnames.length; i++) {
    lastname = lastnames[i];
  }

  completeNameArray.push[name + lastname];
}
