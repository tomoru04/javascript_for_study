/*
 *
 * This file is for the section "Expressions and operators"
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
 * 
 */


/*
 * Logical assignment
 */
let logicalOperand1 = 7;
let logicalOperand2 = 10;
let logicalOperand3 = 0;

// Same as "logicalAndOperand1 && (logicalAndOperand1 = logicalAndOperand2)", meaning "if left variable is truthy, left variable is assigned right value"
logicalOperand1 &&= logicalOperand2;
console.log(logicalOperand1);

console.log(!true);  // false
console.log(!"Cat"); // false
console.log(!"");    // true


/*
 * Short-cuicuit evaluation
 */
console.log(logicalOperand1 && logicalOperand2); // if the left operand is truthy, right operand is logged.
console.log(logicalOperand3 && logicalOperand2); // if the left operand is falsy, left operand is logged.

console.log(logicalOperand1 || logicalOperand2); // if the left operand is truthy, left operand is logged.
console.log(logicalOperand3 || logicalOperand2); // if the left operand is falsy, right operand is logged.

console.log(logicalOperand1 ?? logicalOperand2); // if the left operand is neither undefined nor null, left operand is logged.
console.log(logicalOperand3 ?? logicalOperand2);
console.log(undefined ?? logicalOperand2);       // if the left operand is undefined or null, right operand is logged.
console.log(null ?? logicalOperand2);


/*
 * Chaining and nesting assignment (Don't use these statement. It's just for understandings.)
 */

function f() {
  console.log("F!");
  return 2;
}
function g() {
  console.log("G!");
  return 3;
}
let x, y;

// Each function logs only once.
y = x = f();
y = [f(), x = g()];
x[f()] = g();

// It only declares zz. In sloppy mode, yy and xx are declared as global variables.
const zz = yy = xx = f();


/*
 * BigInt operators
 */
const number_x = Number(1) + 2;
const bigint_y = 1n + BigInt(2);

console.log(number_x); //  3 is logged
console.log(bigint_y); // 3n is logged

// You can compare Number with BigInt
console.log(1n > 2);
console.log(3 > 2n);

console.log(400000000000n >> 2n);
console.log(400000000000n >>> 2n); // can't use this


/*
 * delete (Unary operator)
 */
const objForDelete = {"first": "hello", "second": "bye"};
console.log(objForDelete);

delete objForDelete.first;
console.log(objForDelete);


/*
 * typeof (Unary operator)
 */
const myFun = () => 5 + 2;
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();

console.log(typeof myFun); // "function"
console.log(typeof shape); // "string"
console.log(typeof size); // "number"
console.log(typeof foo); // "object"
console.log(typeof today); // "object"
console.log(typeof doesntExist); // "undefined"


/*
 * in (Relational operator)
 */
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees); // true
console.log(3 in trees); // true
console.log(6 in trees); // false
console.log("bay" in trees); // false

console.log("PI" in Math); // true
const myString = new String("coral");
console.log("length" in myString); // true

const myCar = { make: "Honda", model: "Accord", year: 1998 };
console.log("make" in myCar); // true
console.log("model" in myCar); // true

/*
 * instanceof (Relational operator)
 */
const arrForErr = [1, 2, 3];
try {
  const num = 123;
  const text = "text";
  num += text;
} catch(e) {
  if (e instanceof TypeError) {
    console.log("This message is created by Tomoya: TypeError Occured.")
  }
}


/*
 * this (Basic expression)
 */
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

const person1 = {
  firstName: "Chris",
  lastName: "Martin",
};

const person2 = {
  firstName: "Chester",
  lastName: "Bennington",
};

// Attach the same function
person1.getFullName = getFullName;
person2.getFullName = getFullName;

console.log(person1.getFullName()); // "Chris Martin"
console.log(person2.getFullName()); // "Chester Bennington"


/*
 * Optional chaining (Basic expression)
 */

const vehicle1 = {
  name: "car",
  price: 2000,
  getName() {
    return this.name;
  },
};
console.log(vehicle1?.name);
console.log(vehicle1?.price);
console.log(vehicle1?.size); // It doesn't cause a TypeError

vehicle1.getName?.();
vehicle1.getPrice?.(); // It doesn't cause a TypeError