//Question 1
let score = 85;
let result = score >= 80 ? "Pass" : "Fail";
console.log(result);

//Question 2

// optional chaining operator 
// const person ={
//     name: "Ritika",
//     address: {
//     city: "Karachi",
//     zipcode: 45678 
// }
// };

// console.log(person?.address?.zipcode);
// console.log(person?.address?.street);

//Question 3

// for of

// const evennumbers = [2,4,6,8,10];
// for (const list of evennumbers){
//     console.log(list);
// } 

// for in
// const myself = {
//         name: "Ritika",
//         fathername: "Narain",
//         city: "Karachi",
        
//     };

//     for (const key in myself){
//         console.log(key +':' + myself[key]);
//     }


    // Question 4
    // CalculateAverage

    // function CalculateAverage(numbers)
    // {
    //     if (numbers.length === 0){
    //         return 0;
    //     }
    //     const sum = numbers.reduce((acc,num) => acc + num , 0);
    //     const average = sum / numbers.length;
    //     return average;
    // }

    // const numbersArray = [1,2,3,4,5];
    // const averageValue = CalculateAverage(numbersArray);
    // console.log("Average:", averageValue);

     //Question 5

    //  function outerFunction(){
    //     let outerVariable = 'Concept of Closure';

    //     function innerFunction(){
    //         console.log(outerVariable);
    //     }

    //     return innerFunction;
    //  }

    //  const closure = outerFunction();
    //  closure();

    //Question 6
    // const student = {
    //     name : "Ritika",
    //     age : 18,
    //     grades : [80,85,90,70,95],
    //     CalculateAverage : function()
    //     {
    //         if(this.grades.length ===0)
    //         {
    //             return 0;
    //         }
    //         const sum = this.grades.reduce((acc,grade)=> acc + grade, 0);
    //         const average = sum / this.grades.length;
    //         return average;
    //     },
    // };
    // console.log('Average Grade', student.CalculateAverage());

//Question 7
//ShallowCopy
// const Employee = {name: "sana", salary: "25000", location: {city: "Karachi"}};
// const shallowCopy = {...Employee};
// console.log(shallowCopy);
// console.log("After Modification");
// shallowCopy.location.city = "Islamabad";
// console.log(Employee);

//DeepCopy
// const Employee = {name: "sana", salary: 25000, location: {city: "Karachi"}};
// const deepCopy = JSON.parse(JSON.stringify(Employee));
// console.log(deepCopy);
// console.log("After Modification");
// deepCopy.salary = 30000;
// console.log(Employee);

//referenceCopy
// const Employee = {name: "sana", salary: 25000, location: {city: "Karachi"}};
// const referenceCopy = Employee;
// console.log(referenceCopy);
// console.log("After Modification");
// referenceCopy.location.city = "lahore";
// console.log(Employee);


//Question 8

// const numbers = [1,2,3,4,5,6,7,8];
// for(let i = 0; i<numbers.length; i++){
//     const result = numbers[i] % 2 === 0?'even':'odd';
//     console.log(numbers[i] +  " is "  + result);
// }

//Question 9

// for loop
// for(let i = 0; i<5; i++){
//     console.log(i);
// }

 //while loop
// let count = 0;
// while(count < 5){
//     console.log(count);
//     count++;
// }

 //do...while loop
// let count = 0;
// do{
//     console.log(count);
//     count++;
// } while (count < 5);

//Question 10

// Sample array of objects with potentially missing properties
// const Employees = [
//     { id: 1, name: 'Ritika', address: { city: 'Karachi' } },
//     { id: 2, name: 'Salwah', address: { city: 'Islamabad' } },
//     { id: 3, name: 'Rabia' }
//   ];
  
//   // Loop through the array and access the city property using optional chaining
//   for (const Employee of Employees) {
//     const cityName = Employee?.address?.city || 'Unknown';
  
//     console.log(`${Employee.name}'s city is ${cityName}`);
//   }
  
//Question 11

// const exampleObject = {
//     name: 'Ritika',
//     age: 21,
//     city: 'karachi'
//   };
  
//   for (const key in exampleObject) {
//     if (exampleObject.hasOwnProperty(key)) {
//       const value = exampleObject[key];
//       console.log(`Property: ${key}, Value: ${value}`);
//     }
//   }
  
  //Question 12
  //break statement

//   for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//       console.log('Breaking the loop at i = 5');
//       break;
//     }
//     console.log(i);
//   }

//   //continue statement

//   for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//       console.log('Skipping iteration at i = 5');
//       continue;
//     }
//     console.log(i);
//   }
  
   //Question 13

//    function calculateTax(income) {
//     const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.2 : 0.3;
  
//     // Calculate and return the tax amount
//     const taxAmount = income * taxRate;
//     return taxAmount;
//   }
  
//   // Example usage
//   const income1 = 50000;
//   const tax1 = calculateTax(income1);
//   console.log(`Tax for income $${income1}: $${tax1}`);
  
//   const income2 = 160000;
//   const tax2 = calculateTax(income2);
//   console.log(`Tax for income $${income2}: $${tax2}`);
  
//   const income3 = 200000;
//   const tax3 = calculateTax(income3);
//   console.log(`Tax for income $${income3}: $${tax3}`);
  
// Question 14
// const car = {
//     make: 'Honda',
//     model: 'Civic',
//     startEngine: function() {
//       console.log('Engine started. Vroom, vroom!');
//     }
//   };
  
//   // calling the method
//   car.startEngine();
 
// Question 15
// function RegularFunction(){
//       this.value=40
//       this.method = function(){
//           console.log(this.value);
//       };
//   }
//   const regularConstructor = new RegularFunction()
//   regularConstructor.method();
  
//     function ArrowFunction(){
//       this.value=80
//       this.method = () => {
//           console.log(this.value);
//       };
//   }
//   const arrowConstructor = new ArrowFunction()
//   arrowConstructor.method();
