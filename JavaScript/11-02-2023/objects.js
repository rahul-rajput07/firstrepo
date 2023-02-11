// Objects

let person = {
  name: "John",
  age: 56,
  isEmployed: false,
  salary: 76000,
};

console.log(person.isEmployed);

person.city = "Bangalore";
person.isEmployed = true;
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(Object.keys(person).length);
