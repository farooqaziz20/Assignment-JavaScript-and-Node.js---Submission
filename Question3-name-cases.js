function getLowerCase() {
  var personName = "Farooq Aziz".toLocaleLowerCase();
  return personName;
}
function getUpperCase() {
  var personName = "Farooq Aziz".toUpperCase();
  return personName;
}
function getTitleCase() {
  var personName = "Farooq Aziz";
  let sentence = personName.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");
  return personName;
}
console.log("Lower Case Name: " + getLowerCase());
console.log("Upper Case Name: " + getUpperCase());
console.log("Upper Title Name: " + getTitleCase());
