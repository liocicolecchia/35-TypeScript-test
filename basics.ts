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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Lio",
  age: 23,
};

let people: {
  name: string;
  age: number;
}[];

// person = {
//   isEmployee: true,
// };

// Type Inference

let course: string | number = "Im doing the course";

course = 234534;

// Functions types, parameters
