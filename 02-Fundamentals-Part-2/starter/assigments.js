function describeCountry(country, population, capitalCity) {
  const string = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return string;
}

const desGeorgia = describeCountry("Georgia", 5, "Tbilisi");
const desPortugal = describeCountry("Portugal", 10, "Lisbon");
const desGermany = describeCountry("Germany", 83, "Berlin");

console.log(desGeorgia, desGermany, desPortugal);

const populationWorld = 7900;

function percentageOfWorld1(population) {
  return (population / populationWorld) * 100;
}

const percantageGeorgia = percentageOfWorld1(5);
const percantagePortugal = percentageOfWorld1(10);
const percentageChina = percentageOfWorld1(1441);

console.log(percantageGeorgia, percantagePortugal, percentageChina);

const percentagePopulation = function (population) {
  return (population / populationWorld) * 100;
};

console.log(
  percentagePopulation(5),
  percentagePopulation(10),
  percentagePopulation(1441)
);
