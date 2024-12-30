function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6
const result3 = multiply(7, 2); // 14

let result4: number;
let result5:number;

try {
  result4 = divide(15, 3); // 5
  result5 = divide(10,0);
} catch (error) {
  console.error('An error occurred:', error.message);
  result4 = 0; // or handle the error in another way
  result5 = 0;
}

console.log(result1, result2, result3, result4,result5); // Output: 8 6 14 5