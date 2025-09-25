const name = "ram"
const repoCount = 24

// Old way (concatenation)
console.log("Hello my name is " + name + " and I have " + repoCount + " repositories")

// Modern way (Template literals with backticks)
console.log(`Hello my name is ${name} and I have ${repoCount} repositories`)

const gameName = new String("archery")

console.log("\nString values and object:")
console.log("Literal string:", name)     // "ram"
console.log("String object:", gameName)  // [String: 'archery']


console.log("\nString methods in action:")
console.log("Length:", gameName.length)         // 7 → total characters
console.log("Index access:", gameName[2])       // "c" → char at index 2
console.log("Uppercase:", gameName.toUpperCase()) // "ARCHERY"
console.log("Lowercase:", gameName.toLowerCase()) // "archery"
console.log("Char at(2):", gameName.charAt(2))   // "c"
console.log("Index of 'r':", gameName.indexOf("r")) // 2 (first 'r')

// substring(start, end) → end index not included
console.log("Substring(0,4):", gameName.substring(0,4)) // "arch"

// slice(start, end) → supports negative indexes
console.log("Slice(-3):", gameName.slice(-3)) // "ery"

// trim() → removes leading & trailing spaces
const spaced = "   hello world   "
console.log("Trimmed:", spaced.trim()) // "hello world"

// replace() → replace first match
let url = "https://example.com/ram%20sita"
console.log("Replaced URL:", url.replace("%20", "-")) // https://example.com/ram-kumar

// includes() → check substring presence
console.log("Includes 'arch':", gameName.includes("arch")) // true
console.log("Includes 'xyz':", gameName.includes("xyz"))   // false

// split() → break string into array
console.log("Split by '-':", "ram-sita-com".split("-")) // ["ram","sita","com"]

// startsWith() / endsWith()
console.log("Starts with 'arc':", gameName.startsWith("arc")) // true
console.log("Ends with 'ry':", gameName.endsWith("ry"))       // true
