let notes = [12, 8, 15, 10, 7];

let somme = 0;
let max = notes[0];
let admis = 0;

for (let note of notes) {
    somme += note;
    if (note > max) max = note;
    if (note >= 10) admis++;
}

let moyenne = somme / notes.length;

console.log("Moyenne :", moyenne);
console.log("Meilleure note :", max);
console.log("Nombre des admis :", admis);