/*
  Arrays store multiple values in a single variable.
- Can contain any data type: number, string, boolean, object, other arrays.
*/


// Creating arrays
let numbers = [1, 2, 3, 4, 5]
let fruits = ["apple", "banana", "mango"]
let mixed = [1, "ram", true, null, [2, 3]] // nested array


// Creating array using constructor
const newArray = new Array(1,2,3,4,5,"ram")
console.log("New Array:", newArray)

// Accessing elements
console.log("Numbers array:", numbers)
console.log("First element:", numbers[0])
console.log("Last element:", numbers[numbers.length - 1])

// Adding elements
numbers.push(6)    // add at end
numbers.unshift(0) // add at start
console.log("After adding:", numbers)

// Removing elements
numbers.pop()      // remove last
numbers.shift()    // remove first
console.log("After removing:", numbers)

console.log("Length:", numbers.length)
console.log("Is 'numbers' an array?", Array.isArray(numbers))
console.log("Index of 3:", numbers.indexOf(3))

/*
1. Use push/pop for end, unshift/shift for start (avoid shift/unshift on large arrays due to re-indexing cost)
2. splice can add/remove at any position
3. Array.isArray() is reliable to check if a variable is an array
4. Use spread operator or slice() to create shallow copies instead of sharing references
*/
