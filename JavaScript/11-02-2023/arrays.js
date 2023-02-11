let person = ["John", 56, true, "Mumbai", 1321236354];

// console.log(person[0]);
// console.log(person.length);

// console.log(person[person.length - 1]);

console.log(person[0]);

// Print the last element of the array without specifying direct index

console.log(person[person.length - 1]);

person.push(56000.0);
console.log(person);

person.pop();
console.log(person);

person.unshift(56000.0);
console.log(person);

person.shift();
console.log(person);

delete person[2];
console.log(person);
