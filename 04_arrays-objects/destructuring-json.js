/*
👉 Destructuring
- Extract values from objects/arrays into variables.
👉 JSON (JavaScript Object Notation)
- Data format used for APIs, config files, storage.
*/

// Object destructuring
const user = {
    name: "Ram",
    age: 22,
    address: {
        city: "Ayodhya",
        country: "India"
    },
    skills: ["JS", "Node", "Security"]
}

// Basic destructuring
const { name, age } = user
console.log("Name:", name)
console.log("Age:", age)

// Nested destructuring
const { address: { city, country } } = user
console.log("City:", city)
console.log("Country:", country)

// Renaming while destructuring
const { name: userName, age: userAge } = user
console.log("Renamed:", userName, userAge)

// Default values
const { isStudent = true } = user
console.log("Default value for isStudent:", isStudent)

// Array destructuring
const fruits = ["apple", "banana", "mango"]

const [first, second] = fruits
console.log("\nArray destructuring:", first, second)

const [head, , tail] = fruits // skip with comma
console.log("Head:", head, "Tail:", tail)

// JSON basics

// JSON object (similar to JS object but stricter: keys & strings in double quotes)
const jsonString = `{
    "id": 1,
    "title": "Learn JavaScript",
    "completed": false
}`

// Parse JSON string to JS object
const todo = JSON.parse(jsonString)
console.log("\nParsed JSON object:", todo)
console.log("Todo title:", todo.title)

// Convert JS object to JSON string
const newTodo = {
    id: 2,
    title: "Practice Objects",
    completed: true
}

const newJsonString = JSON.stringify(newTodo)
console.log("Stringified JSON:", newJsonString)
