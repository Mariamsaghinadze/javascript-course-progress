// Values and Varibales

const country = "Georgia";
const continent = "Europe";
let population = 5;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
// let, const and var

const isIsland = false;
const language = "Georgian";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Basic Operators

console.log(population / 2);
console.log(population++);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
const averagePopulation = 33;
console.log(population < averagePopulation);
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description);

// Strings and template literals

const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

if (population < averagePopulation) {
  console.log(
    `Georgia's population is ${
      averagePopulation - population
    } million below everage`
  );
}
