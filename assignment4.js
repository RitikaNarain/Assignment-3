// question 1
// Map Transformation
// const numbers = [2, 4, 6, 8, 10];
// const squaredNumbers = numbers.map((element) => element * element);
// console.log(squaredNumbers);


//question 2
 //Filter and Map Combination
// const strings = ["red", "black", "blue", "yellow", "white"];
// const filteredAndCapitalized = strings
//   .filter(str => str.length >= 5)
//   .map(str => str.toUpperCase());
// console.log(filteredAndCapitalized);


//question 3
//Sorting Objects
// const products = [
//   { name: "iPhone", price: 150000 },
//   { name: "Headphones", price: 100 },
//   { name: "Androidphone", price: 50000 },
//   { name: "Smartwatch", price: 1000 }
// ];
// const sortedProducts = products.sort((a, b) => b.price - a.price);
// console.log(sortedProducts);


// question 4
//Reduce for Aggregation
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const sumOfEvenNumbers = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     return acc + num;
//   }
//   return acc;
// }, 0);
// console.log(sumOfEvenNumbers);


// question 5
//Find and Modify
// const tasks = [
//     { id: 1, status: 'pending' },
//     { id: 2, status: 'in-progress' },
//     { id: 3, status: 'pending' },
//     { id: 4, status: 'in-progress' }
//   ];
  
//   const targetId = 3;
  
//   const targetObject = tasks.find(obj => obj.id === targetId);
  
//   if (targetObject) {
//     targetObject.status = 'completed';
//     console.log(targetId, tasks);
//   } else {
//     console.log(`Object with id  not found.`);
//   }

//question 6
//Chaining Method
// const numbersArray = [-2, 5, 7, -10, 3, 9, -4];
// const averageOfPositives = numbersArray
//   .filter(number => number > 0)
//   .reduce((sum, currentNumber, index, array) => sum + currentNumber / array.length, 0);
// const roundedAverage = averageOfPositives.toFixed(2);
// console.log(parseFloat(roundedAverage));

//question 7
//Conditional Filtering
// const profile = [
//     { name: 'ritika', age: 20 },
//     { name: 'salwah', age: 16 },
//     { name: 'wzymul', age: 30 },
//     { name: 'sajida', age: 17 }
//   ];
  
//   function filterAdults(arrayOfPersons) {
//     return arrayOfPersons.filter(person => person.age >= 18);
//   }
//   const adults = filterAdults(profile);
//   console.log(adults);

//question 8
//Advanced Sorting
// const arrayOfStrings = ['purple', 'blue', 'white', 'black', 'orange', 'pink'];
// const sortedArray = arrayOfStrings.sort((a, b) => a.length - b.length);
// console.log(sortedArray);


//question 9
//Nested Array Operations
// const nestedarray= [[6, 2, 5], [6, 5], [6, 7, 6]];
// const flattenedarray= nestedarray.flat();
// const sum = flattenedarray.reduce((sum, number) => sum + number, 0);
// console.log(sum);

//question 10
//Error Handling with Find
// const array = [
//   { id: 1, name: 'ritika' },
//   { id: 2, name: 'zainab' },
//   { id: 3, name: 'sajida' }
// ];

// function findObjectById(array, targetId, defaultObject) {
//   const foundObject = array.find(obj => obj.id === targetId);

//   return foundObject || defaultObject;
// }

// const targetId = 4;
// const defaultObject = { id: targetId, name: 'Not Found' };

// const resultObject = findObjectById(array, targetId, defaultObject);
// console.log(resultObject);


//question 11
//Map Method
// const numbers = [1, 2, 3, 4, 5];
// // doubling each number in the array using arrow function with map()
// const doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers);

//question 12
//Filter Method
// const numbers = [1, 20, 4, 10, 8, 3, 7];
// const greaterThanFive = numbers.filter(number => number > 5);

// console.log(greaterThanFive);

 //question 13
 //Sort Method
// const student = [
//     { name: 'zainab', grade: 75 },
//     { name: 'salwah', grade: 80 },
//     { name: 'ritika', grade: 50 }
//   ];
  
//   student.sort((person1, person2) => person1.grade - person2.grade);
//   console.log(student);
   
//question 14
//Reduce Method

// const numbers = [2, 4, 6, 7, 9];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); 

//question 15
//Find Method
// const numbers = [5, 20, 8, 15, 18];

// // Using find to find the first number greater than 10
// const firstGreaterThanTen = numbers.find(number => number > 10);
// console.log(firstGreaterThanTen); 
// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];
//     // Finding a user by ID using find()
//   const userWithIdTwo = users.find(user => user.id === 2);

//   console.log(userWithIdTwo);

//question 16
//Combining Method
// const strings = ['apple', 'banana', 'orange', 'grape', 'apricot'];

// const concatenatedString = strings
//   .filter(word => word.startsWith('a')) // Filter strings starting with 'a'
//   .map(word => word.toUpperCase()) // Convert filtered strings to uppercase
//   .reduce((accumulator, currentValue) => accumulator + ' ' + currentValue, ''); // Concatenate into a single string

// console.log(concatenatedString);

//question 17
//Callback Functions
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubledNumbers); 

//question 18
//Error Handling
// const numbers = [];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue === undefined || currentValue === null) {
//     return accumulator; 
//   }
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); 

//question 19
//immutable operation 
//using map

// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = originalArray.map(num => num * 2);

// console.log(originalArray); 
// console.log(doubledArray); 


// Using filter to keep only numbers greater than 3:
// const originalArray = [2, 4, 6, 8, 10];

// const filteredArray = originalArray.filter(num => num > 3);

// console.log(originalArray); 
// console.log(filteredArray); 
