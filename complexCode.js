/* 
 * Filename: complexCode.js
 * Description: A complex JavaScript code demonstrating various advanced concepts and techniques.
 */

// Custom utility function to find the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1)
    return 1;

  let result = 1;
  for (let i = 2; i <= n; i++)
    result *= i;

  return result;
}

// Custom class to represent a geometric shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Method to calculate the area of the shape
  calculateArea() {
    throw new Error("Not implemented");
  }
}

// Subclass Circle inheriting from Shape
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // Override calculateArea method for Circle
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Subclass Rectangle inheriting from Shape
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Override calculateArea method for Rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

// Function to calculate the sum of the areas of multiple shapes
function calculateTotalArea(shapes) {
  let totalArea = 0;
  for (let shape of shapes) {
    if (!(shape instanceof Shape))
      throw new Error("Invalid shape");

    totalArea += shape.calculateArea();
  }

  return totalArea;
}

// Example usage of the above classes and functions
const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 10, 6);
console.log("Circle area:", circle.calculateArea());
console.log("Rectangle area:", rectangle.calculateArea());
console.log("Total area:", calculateTotalArea([circle, rectangle]));

// Recursive function to find the nth Fibonacci number
function fibonacci(n) {
  if (n <= 0)
    throw new Error("Invalid number");

  if (n === 1 || n === 2)
    return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate and print the first 10 Fibonacci numbers
for (let i = 1; i <= 10; i++) {
  console.log("Fibonacci number", i + ":", fibonacci(i));
}

// Advanced array manipulation using map, filter, and reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquaresSum = numbers
  .filter(num => num % 2 === 0)
  .map(num => num ** 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log("Sum of squares of even numbers:", evenSquaresSum);

// Asynchronous code using Promises and async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncOperation() {
  console.log("Start async operation");
  await delay(2000);
  console.log("Async operation complete");
}

asyncOperation();