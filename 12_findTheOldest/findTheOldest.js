// To run tests, use command in terminal below:
// npm test findTheOldest.spec.js

// reduce allows you to build something on every item in the object. For this exercise use the .reduce method to cycle through the array and return a single value (oldest), get the years lived (yearOfBirth - yearOfDeath), sort from youngest to oldest and return the object that represents the oldest person. If the person does not have a dateOfDeath, use the current date: 

// use the following syntax to get current year:
// const date = new Date().getFullYear();

// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

// https://www.youtube.com/watch?v=HB1ZC7czKRs

//const people = [
    //{
      //name: "Carly",
      //yearOfBirth: 2018,
    //},
    //{
      //name: "Ray",
      //yearOfBirth: 1962,
      //yearOfDeath: 2011,
    //},
    //{
      //name: "Jane",
      //yearOfBirth: 1912,
      //yearOfDeath: 1941,
    //}
//]

const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
}; 

// Ternerary operator is like a shorthand if statment: if (oldestAge < (less than) currentAge) === true (?) return the current person, if false, return oldest person)

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth
};

// Do not edit below this line
module.exports = findTheOldest;
