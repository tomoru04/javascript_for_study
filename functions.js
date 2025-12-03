// comment test

/* comment
 * test
 */

function func(x) {
  return x * 2;
}

const func_expr = function func_inner(x) {
  return x === 0 ? 0 : x + func_inner(x - 1);
}

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

console.log(func(5));
console.log(func_expr(5));

try {
  func_inner(5);
} catch(e) {
  console.log(e);
}

console.log(res);