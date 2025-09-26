const mySymbol = Symbol("flag") // unique key

const user = {
    name: "Ram",
    age: 22,
    isStudent: true,
    [mySymbol]: "bhagwa" // symbol property
}

console.log("User with Symbol:", user)
console.log("Access symbol value:", user[mySymbol]) // must use bracket

// Object.freeze()
user.age = 24  // update works before freeze
Object.freeze(user) // prevent modifications

user.age = 30 // will not update
user.newProp = "test" // will not add
console.log("After freeze attempt:", user)

// freeze only affects top-level, not nested objects
user.address = { city: "Ayodhya" }
user.address.city = "Mathura" // still works
console.log("Nested object still mutable:", user.address)

// Object utilities
console.log("\nObject.keys:", Object.keys(user))   // keys in array
console.log("Object.values:", Object.values(user)) // values in array
console.log("Object.entries:", Object.entries(user)) // key-value pairs

// Looping with entries
console.log("\nLoop with Object.entries:")
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`)
}

// Object.assign() & spread
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const merged1 = Object.assign({}, obj1, obj2) // assign
const merged2 = { ...obj1, ...obj2 }          // spread operator

console.log("\nMerged with Object.assign:", merged1)
console.log("Merged with spread:", merged2)
