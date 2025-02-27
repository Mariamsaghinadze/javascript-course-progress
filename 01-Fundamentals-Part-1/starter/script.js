// let js = "amazing";
// console.log(40 + 8 + 23 - 8);

// let firstName = "Bob"; //camelCase
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415; //constant

// let myFirstJob = "Programmer"; //descriptive value
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// //assignment

// let country = "Georgia";
// let continent = "Europe";
// let population = 5;

// console.log(country);
// console.log(continent);
// console.log(population);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas ");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// var job = "programmer";
// job = "teacher";

// lastName = "Saghinadze";
// console.log(lastName);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2**3 means 2 to the pwoer of 3 = 2 * 2 * 2

// const firstName = "Mariam";
// const lastName = "Saghinadze";

// console.log(firstName + " " + lastName);

// // Assigment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--;
// x--; // x = x - 1
// console.log(x);

// // Comparison operators

// console.assert.log(ageJonas > ageSarah); // > , < , >= , <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2019);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2019);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;

// console.log(ageJonas, ageSarah, averageAge);

// const firstName = "Mariam";
// const job = "Developer";
// const birthYear = 2000;
// const year = 2025;

// const mariam =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(mariam);

// const mariamNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(mariamNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
//     multiple \n\
//     lines"
// );

// console.log(`String
//     multiple
//     lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years😊`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));

// console.log(String(23));

// // type coercion
// console.log("I am " + 23 + " years old");

// console.log("23" - "10" - 3);
// console.log("23" + "10" - 3);
// console.log("23" * "2");

// let n = "1" + 1;

// n = n - 1;
// console.log(n);

//Truthy and Falsy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;

if (money) {
  console.log("Don't spent it all ;)");
} else {
  console.log("You should get a job!");
}

let height;

if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED!");
}
