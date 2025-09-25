let name = "ram" // string
let age = 22 // number
let isStudent = true // boolean
let score = null // null
let grade // undefined
let address = { city: "Delhi", country: "India" } // object
let hobbies = ["reading", "traveling", "coding"] // array


// -------------------- Data Type Explanation --------------------
// string  => sequence of characters
// number  => numeric value (integer or float)
// boolean => true or false
// null    => standalone value representing 'no value'
// undefined => variable declared but not assigned a value
// symbol  => unique and immutable identifier (ES6+)
// object  => collection of key-value pairs
// array   => ordered collection of values (special type of object)


// Using typeof to check data types
console.log("\nUsing typeof:") 
console.log("Type of name:", typeof name) // string
console.log("Type of age:", typeof age)     // number
console.log("Type of isStudent:", typeof isStudent) // boolean
console.log("Type of address:", typeof address) // object
console.log("Type of hobbies:", typeof hobbies) // object 
console.log("Type of score:", typeof score) // object (this is a known quirk in JS)
console.log("Type of grade:", typeof grade) // undefined
