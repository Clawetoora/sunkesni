console.log(`Pirma uzduotis-------`);

let numbers = [];

for (let i = 0; i < 300; i++) {
  numbers.push(Math.round(Math.random() * 300));
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 275) {
    numbers[i] = `[${numbers[i]}]`;
  }
}

console.log(numbers.join(" "));

console.log(`Antra uzduotis------`);

let numbers2 = "";

for (let i = 1; i < 3000; i++) {
  if (i % 77 === 0) {
    numbers2 = numbers2 + i + ",";
  }
}

for (let i = 77; i < 3000; i += 77) {
  numbers2 = numbers2 + i + ",";
}

console.log(numbers2.slice(0, -1));

console.log(`trecia uzduotis-------`);

let kvadratas = document.getElementById("kvadratas");
let n = 9;
kvadratas.innerHTML = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == j || i + j == n - 1) {
      kvadratas.innerHTML += "x";
    } else {
      kvadratas.innerHTML += "o";
    }
  }
  kvadratas.innerHTML += "<br>";
}

console.log(kvadratas);

console.log(`penkta uzduotis-------`);

console.log(`--------A------------`);
do {
  metimas = Math.round(Math.random());
  if (metimas === 1) {
    console.log("S");
  }
  if (metimas === 0) {
    console.log("H");
  }
} while (metimas !== 0);
// console.log(moneta);

console.log(`--------b--------`);
// let metimas;
let counter = 0;
do {
  let metimas = Math.round(Math.random());
  if (metimas === 1) {
    console.log("S");
  }
  if (metimas === 0) {
    console.log("H");
    counter++;
  }
} while (counter < 3);

console.log(`-----------C-----------`);

counter = 0;
do {
  let metimas = Math.round(Math.random());
  if (metimas === 1) {
    console.log("S");
    counter = 0;
  }
  if (metimas === 0) {
    console.log("H");
    counter++;
  }
} while (counter < 3);

console.log(`sesta uzduotis`);

let kazioPoints = 0;
let petroPoints = 0;
let petroPartija = 0;
let kazioPartija = 0;

do {
  kazioPartija = Math.round(Math.random() * (20 - 10) + 10);
  petroPartija = Math.round(Math.random() * (25 - 5) + 5);
  kazioPoints += kazioPartija;
  petroPoints += petroPartija;
  if (kazioPartija > petroPartija) {
    console.log(
      `Kazys surinko ${kazioPartija}, Petras surinko ${petroPartija}, Kazys laimejo partija. Kazys turi ${kazioPoints} tasku. Petras turi ${petroPoints} tasku`
    );
  }
  if (kazioPartija < petroPartija) {
    console.log(
      `Kazys surinko ${kazioPartija}, Petras surinko ${petroPartija}, Petras laimejo partija.  Kazys turi ${kazioPoints} tasku. Petras turi ${petroPoints} tasku`
    );
  }
  if (kazioPartija === petroPartija) {
    console.log(
      `Kazys surinko ${kazioPartija}, Petras surinko ${petroPartija},  lygiosiomis suzaista partija. Kazys turi ${kazioPoints} tasku. Petras turi ${petroPoints} tasku`
    );
  }
} while (kazioPoints < 222 && petroPoints < 222);

console.log(
  kazioPoints > 222
    ? `Kazys laimejo zaidima su ${kazioPoints} taskais`
    : `Petras laimejo zaidima su ${petroPoints} taskais`
);

console.log("------astunta-------");

console.log("--------A---------");

let mazasSmugis = 0;
let vinis = 85;
let smugiuSkaicius = 0;
let vinys5 = vinis * 5;

do {
  mazasSmugis = Math.round(Math.random() * (20 - 5) + 5);
  vinys5 -= mazasSmugis;
  console.log(vinys5);
  smugiuSkaicius++;
} while (vinys5 >= 0);

console.log(smugiuSkaicius + " smugiai");

console.log("--------B---------");

let didelisSmugis = 0;
let chance = 0;
smugiuSkaicius = 0;
vinis = 85;
vinys5 = vinis * 5;
do {
  chance = Math.round(Math.random());
  if (chance === 1) {
    didelisSmugis = Math.round(Math.random() * (30 - 20) + 20);
    console.log(`Pataike`);
  }
  if (chance === 0) {
    didelisSmugis = 0;
    console.log(`Nepataike`);
  }
  vinys5 -= didelisSmugis;
  console.log(vinys5);
  smugiuSkaicius++;
} while (vinys5 >= 0);

console.log(`smugiu skaicius ${smugiuSkaicius}`);

console.log("------9 uzduotis----");

let skaiciai = [];

for (let i = 0; skaiciai.length < 50; i++) {
  let randomSkaicius = Math.round(Math.random() * (200 - 1) + 1);
  if (skaiciai.indexOf(randomSkaicius) === -1) {
    skaiciai.push(randomSkaicius);
  }
}

console.log(skaiciai);

console.log(skaiciai.join(" "));

let pirminiaiSkaiciai = [];

function arrayRemove(arr, value) {
  return arr.filter((ele) => ele != value);
}

for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] === 1) {
    arrayRemove(skaiciai, skaiciai[i]);
  }
  if (skaiciai[i] > 1) {
    for (let j = 2; j < skaiciai[i]; j++) {
      if (skaiciai[i] % j === 0) {
        skaiciai = arrayRemove(skaiciai, skaiciai[i]);
        i--;
      }
    }
  }
}
console.log(skaiciai);

let arraysss = ["labas", "ate", "baisu", "grazu"];

console.log(arrayRemove(arraysss, "baisu"));

console.log(`-------4.Masyvai---------`);

console.log(`Pirma uzduotis-----------`);

let elements = [];
for (let i = 0; i < 30; i++) {
  elements.push(Math.round(Math.random() * (25 - 5) + 5));
}

console.log(elements);

console.log(`Antra uzduotis-----------`);
console.log(`--------A-------`);

counter = 0;

for (let i = 0; i < elements.length; i++) {
  if (elements[i] > 10) {
    counter++;
  }
}

console.log(counter);

console.log(`--------B-------`);

console.log(Math.max(...elements));

console.log(`--------C-------`);

console.log(elements.reduce((a, b) => a + b, 0));

console.log(`--------D-------`);

let naujasElements = [];

for (let i = 0; i < elements.length; i++) {
  naujasElements.push(elements[i] - 1);
}

console.log(naujasElements);

console.log(`--------E-------`);

for (let i = 0; i < 10; i++) {
  elements.push(Math.round(Math.random() * (25 - 5) + 5));
}

console.log(elements);

console.log(`--------F-------`);

let neporinis = [];
let porinis = [];

for (let i = 0; i < elements.length; i++) {
  if (elements[i] % 2 === 0) {
    porinis.push(elements[i]);
  }
  if (elements[i] % 2 !== 0) {
    neporinis.push(elements[i]);
  }
}

console.log(neporinis, porinis);

console.log(`--------G-------`);

for (let i = 0; i < elements.length; i++) {
  if (elements[i] >= 15 && i % 2 == 0) {
    elements[i] = 0;
  }
}

console.log(elements);

console.log(`--------H-------`);

let smallestIndex = 0;

for (let i = 0; i < elements.length; i++) {
  if (elements[i] >= 10) {
    smallestIndex += i;
    break;
  }
}
console.log(smallestIndex);

console.log(`--------I-------`);

let elementsIsfiltruoti = [];

for (let i = 1; i < elements.length; i++) {
  if (i % 2 === 0) {
    elementsIsfiltruoti.push(elements[i]);
  }
}

console.log(elements);
console.log(elementsIsfiltruoti);

// for(let i = 0; i< elements.length; i++){
//   elements
// }

console.log(`------Trecia uzduotis------`);

let abcd = [];

for (let i = 0; i < 200; i++) {
  let value = Math.round(Math.random() * 3);
  if (value === 0) {
    abcd.push("A");
  }
  if (value === 1) {
    abcd.push("B");
  }
  if (value === 2) {
    abcd.push("C");
  }
  if (value === 3) {
    abcd.push("D");
  }
}
console.log(abcd);

console.log(`-----Ketvirta uzduotis------`);

console.log(abcd.sort());

console.log(`-------6 uzduotis--------`);

let masyvas1 = [];
let masyvas2 = [];
for (let i = 0; i < 100; i++) {
  let skaicius1 = Math.round(Math.random() * (999 - 100) + 100);
  let skaicius2 = Math.round(Math.random() * (999 - 100) + 100);
  if (masyvas1.indexOf(i) === -1) {
    masyvas1.push(skaicius1);
  }
  if (masyvas2.indexOf(i) === -1) {
    masyvas2.push(skaicius2);
  }
}

console.log(masyvas1);
console.log(masyvas2);

console.log(`-------7 uzduotis-------`);

let masyvas3 = [];

for (let i = 0; i < masyvas1.length; i++) {
  if (!masyvas2.includes(masyvas1[i])) {
    masyvas3.push(masyvas1[i]);
  }
}

console.log(masyvas3);

console.log(`------- 8 uzduotis --------`);

let masyvas4 = [];
for (let i = 0; i < masyvas1.length; i++) {
  if (masyvas2.includes(masyvas1[i])) {
    masyvas4.push(masyvas1[i]);
  }
}

console.log(masyvas4);

console.log(`-------9 uzduotis-----------`);
// let masyvas5 = [];

let masyvas5 = Object.assign({}, masyvas2);
console.log(Object.keys(masyvas5));
console.log(masyvas5);

let masyvas6 = Object.assign(masyvas5, {});

console.log(masyvas6);

let arr = [];
arr[19] = "Kiaune";
console.log(arr);

let obj = {};
for (let i = 0; i < masyvas1.length; i++) {
  obj[masyvas1[i]] = masyvas2[i];
}

console.log(obj);

console.log(`-------10 uzduotis-------`);
let masyvas7 = [];
masyvas7[0] = Math.round(Math.random() * (25 - 5) + 5);
masyvas7[1] = Math.round(Math.random() * (25 - 5) + 5);
for (let i = 2; i < 10; i++) {
  masyvas7[i] = masyvas7[i - 2] + masyvas7[i - 1];
}
console.log(masyvas7);

console.log(`-------11 uzduotis-------`);

let masyvas8 = [];

for (let i = 0; masyvas8.length < 101; i++) {
  skaicius = Math.round(Math.random() * 300);
  if (masyvas8.indexOf(skaicius) === -1) {
    masyvas8.push(skaicius);
  }
}

console.log(masyvas8);

masyvas8.sort((a, b) => a - b); //ar moki padaryti sortą rankiniu būdu? be funkcijos
console.log(masyvas8.length);
let surusiuotas = [masyvas8.pop()];
// let surusiuotas = [];
console.log(surusiuotas.length);
//  surusiuotas[50] = [masyvas8.pop()];
// let surusiuotas = [];
for (let i = masyvas8.length - 1; i >= 0; i--) {
  if (i % 2 === 0) {
    surusiuotas.unshift(masyvas8[i]);
  } else {
    surusiuotas.push(masyvas8[i]);
  }
}

console.log(surusiuotas);

let bele = [1, 55, 22, 2, 5, 7, 72];

for (let i = 0; i < bele.length; i++) {
  for (let j = i + 1; j < bele.length; j++) {
    if (bele[i] > bele[j]) {
      temp = bele[i];
      bele[i] = bele[j];
      bele[j] = temp;
    }
  }
}
console.log(bele);
