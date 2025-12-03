// comment test

/* comment
 * test
 */


/*
 * basic function definition
 */
function func(x) {
  return x * 2;
}
console.log(func(5));


/*
 * function expression
 */
const funcExpr = function funcInner(x) {
  return x === 0 ? 0 : x + funcInner(x - 1);
}
console.log(funcExpr(5));

try {
  // you can't refer to the inner function
  funcInner(5);
} catch(e) {
  console.log(e);
}


/*
 * callback function
 */
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
const arr = [1, 4, 2, 3, 1];
const res = map(function(x){
  return x * x;
}, arr);
console.log(res);


/*
 * Immediately Invoked Function Expression (IIFE)
 */
(function () {
  console.log("IIFE is called.");
})();

const value_IIFE = (function () {
  return 12345;
})();
console.log(value_IIFE);

(() => {
  console.log("arrow function is called.");
})();


/*
 * closure (it means any piece of code, but in this case it's a function body)
 */
const createPet = function(name) {
  const pet = {
    getName() {
      return name;
    }
  }
  return pet;
}
const pet = createPet("Vivie");
// the closure remembers the name
console.log(pet.getName());


/*
 * inner function takes precedence
 */
function outside() {
  // this defined x is ignored
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}
console.log(outside()(10));


/*
 * arguments object (array-like but not array)
 */
function myConcat(separator) {
  let result = "";
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(myConcat(", ", "Red", "Blue", "Green"));
console.log(myConcat("; ", "Banana", "Apple", "Orange", "Peach"));


/*
 * default parameters
 */
function multiply(a, b = 1) { // b is assigned the default value 1 if argument[1] is missing
  return a * b;
} 
console.log(multiply(5));
console.log(multiply(5, 4));


/*
 * rest parameters
 */
function multiply2(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}
const arrForRest = multiply2(2, 1, 1, 3);
console.log(arrForRest);


/*
 * arrow function (feature: short, not having "this")
 */
const arrForArrow = ["akjf", "sdaiff", "dafjaskjf", "b"];
const arrowFunc = arrForArrow.map((s) => s.length); // it can be short
console.log(arrowFunc);

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // you can use "this" because arrow function does not have its own "this"
  }, 1000);
}
const p = new Person();
console.log(p.age);