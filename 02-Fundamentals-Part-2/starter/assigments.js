function describeCountry(country, population, capitalCity) {
  const string = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return string;
}

const desGeorgia = describeCountry("Georgia", 5, "Tbilisi");
const desPortugal = describeCountry("Portugal", 10, "Lisbon");
const desGermany = describeCountry("Germany", 83, "Berlin");

console.log(desGeorgia, desGermany, desPortugal);
