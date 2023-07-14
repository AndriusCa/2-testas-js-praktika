console.clear()

console.log("--------------1-----------------")
// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
function palyginimas(a, b) {
  if (a < b) {
    console.log("b didesnis uz a")
  } else if (a > b) {
    console.log("a didesnis uz b")
  } else console.log("skaiciai lygus")
}

palyginimas(5, 10)
palyginimas(10, 5)
palyginimas(5, 5)

console.log("--------------2-----------------")
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i < 11; i++) {
  console.log(i)
}

console.log("--------------3-----------------")
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 2; i < 11; i += 2) {
  console.log(i)
}

console.log("--------------4-----------------")
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

let atsitiktiniai = []

for (let i = 0; i < 5; i++) {
  atsitiktiniai.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
}
console.log(atsitiktiniai)

console.log("--------------5-----------------")
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let atsitiktiniaiWhile

do {
  atsitiktiniaiWhile = Math.floor(Math.random() * 10) + 1
  console.log(atsitiktiniaiWhile)
} while (atsitiktiniaiWhile !== 5)

console.log("--------------6-----------------")
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

function atsitiktiniaiSkaiciai(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let ilgis = atsitiktiniaiSkaiciai(20, 30)

let masyvas = []

for (let i = 0; i < ilgis; i++) {
  let skaicius = atsitiktiniaiSkaiciai(10, 30)
  masyvas.push(skaicius)
}

let didziausiaReiksme = masyvas[0]
for (let i = 1; i < masyvas.length; i++) {
  if (masyvas[i] > didziausiaReiksme) {
    didziausiaReiksme = masyvas[i]
  }
}

console.log("Didziausia masyvo reiksme:", didziausiaReiksme)
console.log(masyvas)

console.log("--------------7-----------------")
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// Funkcija, kuri sugeneruoja atsitiktinę raidę A, B, C arba D
// Sukuriamas tuščias masyvas

console.log("--------------8-----------------")
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

console.log("--------------9-----------------")
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(skaicius) {
  if (typeof skaicius !== "number" || isNaN(skaicius)) {
    return "Kintamasis nera skaicius."
  }

  if (skaicius < 2) {
    return "Skaicius nera pirminis."
  }

  for (let i = 2; i < skaicius; i++) {
    if (skaicius % i === 0) {
      return "Skaicius nera pirminis."
    }
  }

  return "Skaicius yra pirminis."
}

console.log(pirminisSkaicius("sss"))
console.log(pirminisSkaicius(3))
console.log(pirminisSkaicius(50))
console.log(pirminisSkaicius("sss"))

console.log("--------------10-----------------")
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris(n) {
  const formNumeris = n.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
  return formNumeris
}

const numeris = [3, 7, 0, 6, 2, 2, 8, 5, 9, 0]
const formNumeris = telefonoNumeris(numeris)
console.log(formNumeris)
