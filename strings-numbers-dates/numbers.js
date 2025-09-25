const score = 400          // number (primitive)
console.log("Score:", score)

const balance = new Number(100) // Number object
console.log("Balance (object):", balance)


console.log("\nConversions:")
console.log("toString:", balance.toString())          // "100"
console.log("toString length:", balance.toString().length) // 3
console.log("toFixed(2):", balance.toFixed(2))        // "100.00"

const otherNumber = 123.8966
console.log("toPrecision(4):", otherNumber.toPrecision(4)) // "123.9"

const hundreds = 1000000
console.log("toLocaleString (US):", hundreds.toLocaleString("en-US")) // "1,000,000"
console.log("toLocaleString (India):", hundreds.toLocaleString("en-IN")) // "10,00,000"



console.log("\nMath operations:")
console.log("Math.abs(-4):", Math.abs(-4))    // 4
console.log("Math.round(4.6):", Math.round(4.6)) // 5
console.log("Math.ceil(4.2):", Math.ceil(4.2))   // 5 (ceil = up)
console.log("Math.floor(4.9):", Math.floor(4.9)) // 4  (floor = down)
console.log("Math.floor(-4.2):", Math.floor(-4.2)) // -5
console.log("Math.sqrt(64):", Math.sqrt(64))   // 8
console.log("Math.pow(3, 4):", Math.pow(3, 4))   // 81 (3^4)

console.log("Math.min:", Math.min(3, 6, 1, 9))   // 1
console.log("Math.max:", Math.max(3, 6, 1, 9))   // 9


console.log("\nRandom numbers:")
console.log("Random (0-1):", Math.random())  // 0 <= x < 1
console.log("Random * 10:", Math.random() * 10) // scale 0-9

// Range formula → random between min & max
const min = 10
const max = 20
const ans = Math.floor(Math.random() * (max - min + 1)) + min
console.log(`Random between ${min} and ${max}: ${ans}`)
