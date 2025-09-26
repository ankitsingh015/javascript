const marvel_heroes = ["Iron Man", "Thor", "Hulk", "Captain America", "Black Widow"]
const dc_heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"]

// concat vs push

// Use push() when you want to modify the existing array and don't need to preserve the original.
// Use concat() when you want to create a new array and keep the original array unchanged.

console.log("\nUsing push with array:")
marvel_heroes.push(dc_heroes) // pushes dc_heroes as a single element
console.log("After push:", marvel_heroes)
console.log("Accessing nested:", marvel_heroes[5][0]) // Superman

console.log("\nUsing concat:")
const all_heroes = marvel_heroes.concat(dc_heroes) // creates new merged array
console.log("All heroes:", all_heroes)

// Spread operator
console.log("\nUsing spread operator:")
const all_new_heroes = [...marvel_heroes, ...dc_heroes] // merges properly
console.log("All new heroes:", all_new_heroes)

// flat()
const new_array = [1, 2, 3, [4, 5], [6, 7, [8, 9]]]
console.log("\nFlatten array:", new_array.flat(Infinity))

// Helper methods
console.log("\nHelper methods:")
console.log("Is array?", Array.isArray(new_array)) // true
console.log("Array.from('JaishreeRam'):", Array.from("JaishreeRam")) // string → array
console.log("Array.of(1,2,3,4,5):", Array.of(1, 2, 3, 4, 5)) // arguments → array

// slice vs splice

const numbers = [10, 20, 30, 40, 50]
console.log("\nOriginal numbers:", numbers)

console.log("Slice(1,4):", numbers.slice(1,4)) // does NOT modify array
console.log("After slice:", numbers)

numbers.splice(2, 2, 99, 100) // modifies original
console.log("After splice:", numbers)

// join()
const joined = dc_heroes.join(" | ")
console.log("\nJoined string:", joined)

// includes()
console.log("\nIncludes check:")
console.log("Has Batman?", dc_heroes.includes("Batman"))
console.log("Has Spiderman?", dc_heroes.includes("Spiderman"))

// sort()
const unsorted = [3,1,4,2,5]
console.log("\nUnsorted:", unsorted)
console.log("Sorted ascending:", [...unsorted].sort((a,b) => a-b))
console.log("Sorted descending:", [...unsorted].sort((a,b) => b-a))
