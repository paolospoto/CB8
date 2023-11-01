// definisco un array
const animals = [
  "Dog",
  "Cat",
  "Bear",
  "Lion",
  "Tiger",
  "Monkey",
  "Dolphin",
  "Whale",
];

// attraverso un ciclo for,
// partendo da i=0,
// stampo ogni "i" (finchè non è uguale alla lunghezza di animals) + l'elemento con indice uguale a i

for (let i = 0; i < animals.length; i++) {
  console.log(i + ": " + animals[i]);
}
