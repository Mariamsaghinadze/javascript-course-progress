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

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

//Equality Operators : == vs. ===

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders!");
}

if ((language === "english", population < 50 && !isIsland)) {
  console.log("You should live in Georgia!");
} else {
  console.log("Georgia does not meet your criteria.");
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too...");
}

console.log(
  `Georgia's population is ${population > 33 ? "above" : "below"} average`
);
