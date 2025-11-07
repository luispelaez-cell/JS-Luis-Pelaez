let number= 1234
let bigint = 5.678
let sum = number + bigint
let rest = number - bigint
let div = number/ bigint
let mult = number * bigint
console.log(sum.toFixed(), div.toFixed() , mult.toFixed())

let catet1 = 4;
let catet2 = 4;
let hipotenusa = Math.hypot(catet1, catet2)
console.log(hipotenusa.toFixed(2))

let string = "Fortnite"
let stringing = "Valorant"
console.log(string/stringing)

let nomComplet = "Luis Pelaez Martos";
let parts = nomComplet.split(" ");
let primerCognom = parts[1]
console.log(primerCognom)

let text = "Luis pleaez Martos";
let posicio = 6;

let nouText = text.slice(0, posicio) + text.slice(posicio + 1);
console.log(nouText);
