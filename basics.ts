// Primitives: numbers, strings, boolean
let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types: arrays, objects

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// type aliases

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Lio",
  age: 23,
};

let people: Person[];

// person = {
//   isEmployee: true,
// };

// Type Inference

let course: string | number = "Im doing the course";

course = 234534;

// Functions types, parameters

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

updatedArray[0].split("");
