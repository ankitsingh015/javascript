// -------------------- String to Number --------------------
let score = "15"
let tempScore = Number(score) // convert string to number
console.log("Converted '15' to number:", tempScore, "Type:", typeof tempScore)

console.log("Type of NaN:", typeof NaN) // JS quirk: NaN is number

// Conversion Notes:
// "15" => 15
// "15abc" => NaN  (Not a Number)
// 0 => 0
// null => 0
// undefined => NaN
// true => 1, false => 0

// -------------------- Number to Boolean --------------------
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // convert number to boolean
console.log("Boolean of 1:", booleanIsLoggedIn)
console.log("Type:", typeof booleanIsLoggedIn)

// Notes:
// Any non-zero number => true, 0 => false
// Any non-empty string => true, "" => false

// -------------------- Number to String --------------------
let someNumber = 15
let stringNumber = String(someNumber)
console.log("Number to string:", stringNumber)
console.log("Type:", typeof stringNumber)

// Notes:
// 15 => "15"
// true => "true", false => "false"
// null => "null", undefined => "undefined"
// NaN => "NaN"

// -------------------- Arithmetic Operations --------------------
console.log("\nAddition: 2 + 2 =", 2+2)
console.log("Subtraction: 2 - 2 =", 2-2)
console.log("Multiplication: 2 * 2 =", 2*2)
console.log("Division: 2 / 2 =", 2/2)
console.log("Modulus: 5 % 2 =", 5%2) // remainder
console.log("Exponentiation: 2 ** 3 =", 2**3) // power

// -------------------- String Concatenation --------------------
let str1 = "jai shree "
let str2 = "ram"
console.log("\nString Concatenation:", str1 + str2, "\n")


console.log("1 + 2 =", 1+2)
console.log("1 + '2' =", 1+"2")
console.log("1 + 2 + '2' =", 1+2+"2")
console.log("'1' + 2 =", "1"+2)
console.log("'1' + 2 + 2 =", "1"+2+2)

let counter = 1
console.log("\nPost-increment (use then increment):", counter++)
console.log("Pre-increment (increment then use):", ++counter)

