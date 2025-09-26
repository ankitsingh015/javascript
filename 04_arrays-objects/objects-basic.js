/*
  Objects store key-value pairs
  Keys are strings (or can be symbols in advanced usage)
  Values can be any type: string, number, array, object, function
*/

// Creating an object
const user = {
    name: "Ram",
    age: 22,
    isStudent: true,
    skills: ["coding", "hacking"],
    address: {
        city: "Ayodhya",
        country: "India"
    }
}

console.log("User object:", user)


console.log("Name (dot):", user.name)           // dot notation
console.log("Age (bracket):", user["age"])      // bracket notation
console.log("City (nested):", user.address.city) // nested object


user.age = 24 // update existing
user.email = "ram@example.com" // add new property
console.log("After update:", user)


delete user.isStudent
console.log("After deletion:", user)

// Looping through object
console.log("\nLooping with for...in:")
for (let key in user) {
    console.log(`${key}: ${user[key]}`)
}

// Functions inside objects
const person = {
    firstName: "Radha",
    lastName: "Shyam",
    greet: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}`
    }
}

console.log("\nFunction in object:", person.greet())
