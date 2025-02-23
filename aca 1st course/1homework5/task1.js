const person = {
  firstName: "Hovhannes",
  lastName: "Kocharyan",
  age: 19,
  hasWife: false,
};

let mOrNot = "";

if (person.hasWife === true) {
  mOrNot = "married";
} else {
  mOrNot = "not married";
}

let res = `Hello, my name's ${person.firstName} ${person.lastName}, i'm ${person.age} years old and i'm ${mOrNot}.`;

console.log(res);
