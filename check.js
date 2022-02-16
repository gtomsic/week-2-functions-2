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
