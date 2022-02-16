/*
    You can check your answers in this file
    by console.logging the variables that are
    storing the results of your function calls.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
const mixedNumbers = [6, 3, 1, 7, 5, 2, 6, 8, 9, 4, 2, 7, 9, 3, 1, 8, 4, 3];
// Do not edit the code above.

/*
  Use the filter method on mixedNumbers to make a new array of just the even numbers.
  The filter function takes a callback with the parameters
  function(element, index, wholeArray){}  Function Form
  (element, index, wholeArray)=>{}    Arrow Form
*/

// CODE HERE
const evenNumbers = mixedNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

////////// PROBLEM 2 //////////

// Do not edit the code below.
const prices = [15.0, 23.0, 78.0, 34.0, 12.0, 86.0, 12.0, 79.0, 32.0];
// Do not edit the code above.

/*
  Use the map method on the prices array to calculate a new array of post-tax prices.
  Use a 7% tax rate.
  Math reminder! To calculate the price after tax, multiply the price by 1 plus the taxRate as a decimal.
  Example: if tax is 7%, the price afterTax could be calculated like this: afterTax = price * 1.07)
  The map function also takes a callback with the parameters
  function(element, index, wholeArray){}  Function Form
  (element, index, wholeArray)=>{}    Arrow Form
*/

// CODE HERE
const postTaxPrices = prices.map((price) => Number((price * 1.07).toFixed(2)));
console.log(postTaxPrices);

////////// PROBLEM 3 //////////

// Do not edit the code below.
const populations = [8175133, 3792621, 2695598, 2100263];
// Do not edit the code above.

/*
  Use the reduce method to calculate the sum of all the populations in the array.
  The reduce function has a slightly different setup for it's callback.
  function(runningTotal, curElement, curIndex, wholeArray){} Function Form
  (runningTotal, curElement, curIndex, wholeArray)=>{} Arrow Form
*/

// CODE HERE
const totalPopulation = populations.reduce(
  (prevValue, currValue) => prevValue + currValue
);
console.log(totalPopulation);

////////// PROBLEM 4 //////////

// Do not edit the code below.
const monstersInYourPocket = [
  { monster: 'Bulbabunny', CP: 156 },
  { monster: 'Bulbabunny', CP: 135 },
  { monster: 'Bulbabunny', CP: 250 },
  { monster: 'Ponylopse', CP: 277 },
  { monster: 'Ponylopse', CP: 184 },
  { monster: 'Pikadoughnet', CP: 207 },
  { monster: 'Bulbabunny', CP: 139 },
  { monster: 'Pikadoughnet', CP: 47 },
  { monster: 'Pikadoughnet', CP: 175 },
  { monster: 'WaterHorsia', CP: 26 },
  { monster: 'Ponylopse', CP: 19 },
  { monster: 'Pikadoughnet', CP: 218 },
  { monster: 'Charaflier', CP: 101 },
  { monster: 'WaterHorsia', CP: 96 },
  { monster: 'Pikadoughnet', CP: 253 },
  { monster: 'Sandmush', CP: 146 },
  { monster: 'Bulbabunny', CP: 247 },
  { monster: 'Charaflier', CP: 55 },
  { monster: 'Bulbabunny', CP: 72 },
  { monster: 'Pikadoughnet', CP: 300 },
  { monster: 'Sandmush', CP: 262 },
  { monster: 'Sandmush', CP: 25 },
  { monster: 'Charaflier', CP: 215 },
  { monster: 'Ponylopse', CP: 125 },
  { monster: 'Bulbabunny', CP: 178 },
];
// Do not edit the code above.

/*
  Now we're going to ramp these up a little bit.
  Instead of just arrays of numbers, we are going to have array of objects that we want to use map, filter, and reduce with.
  Use the filter method to return only the monsters that have a CP of over 200.
*/

// CODE HERE
const myStrongest = monstersInYourPocket.filter((item) => item.CP >= 200);
console.log(myStrongest);

///////// PROBLEM 5 //////////

// Do not edit code below.
const orders = [
  { price: 15, tax: 0.09 },
  { price: 42, tax: 0.07 },
  { price: 56, tax: 0.11 },
  { price: 80, tax: 0.11 },
  { price: 69, tax: 0.06 },
  { price: 68, tax: 0.14 },
  { price: 72, tax: 0.14 },
  { price: 51, tax: 0.09 },
  { price: 89, tax: 0.15 },
  { price: 48, tax: 0.13 },
];
// Do not edit code above.

/*
  Use a higher order method to get all the order totals after adding in the sales tax (given to you as a tax rate, hint: you'll need to do some multiplication). Your answer should be an array of numbers, one total for each order.
*/

// CODE HERE
const calcTax = orders.map((val) =>
  Number((val.price * val.tax + val.price).toFixed(2))
);
console.log(calcTax);

////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.
  Invoke the callback, passing in the product of the two numbers multiplied as the argument.
*/

// CODE HERE

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// multiply(4, 3, (answer) => {
//   console.log('The answer is ' + answer); //should console.log 12
// });

const answer = (x, y) => {
  const answer = x * y;
  console.log('The answer is ' + answer); //should console.log 12
};

const multiply = (x, y, answer) => {
  answer(x, y);
};

multiply(3, 4, answer);

////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// Do not edit the code above.

////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE
const problem2 = (arr, callback) => {
  arr.forEach((name) => callback(name));
};
const callback = (name) => {
  console.log(name);
};
problem2(names, callback);

////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE
const problem3 = (arr, callback) => {
  arr.forEach((firstName) => callback(firstName));
};
const problem3CallBack = (firstName) => {
  console.log('The first name in names is ' + firstName);
};
problem3(names, problem3CallBack);

////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE

const problem4 = (arr, name, callBack) => {
  const checkArr = arr.filter((item) => item === name);
  checkArr.length > 0 ? callBack(true) : callBack(false);
};
const callBack4 = (check) => {
  console.log(check);
};

problem4(names, 'Gabriel', callBack4);

////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
/// COM BACK HERE

////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE
const indexNames = (arr, callback) => {
  arr.forEach((name, index) => {
    callback(name, index);
  });
};
const callback6 = (name, index) => {
  console.log(`${index} My name is ${name}.`);
};

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two paremeters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE
indexNames(names, callback6);

///////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North',
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North',
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North',
  },
];
// Do not edit the code above.

// CODE HERE
const getUserById = (arr, callback) => {
  const id = '16t';
  callback(arr, id);
};
const callback7 = (arr, id) => {
  const user = arr.filter((user) => user.id === id);
  if (user.length > 0) {
    console.log(...user);
  } else {
    console.log({ message: 'Sorry user not found.' });
  }
};

getUserById(users, callback7);

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE
const addingFactory = (number1) => {
  return function (number2 = number1) {
    const sum = number1 + number2;
    return sum;
  };
};

console.log(addingFactory(2));
