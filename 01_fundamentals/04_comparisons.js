console.log("2 > 2:", 2 > 2)   // false
console.log("2 >= 2:", 2 >= 2) // true
console.log("2 < 2:", 2 < 2)   // false
console.log("2 <= 2:", 2 <= 2) // true

console.log("2 == 2:", 2 == 2) // true (loose equality)
console.log("2 != 2:", 2 != 2) // false (loose inequality)

// -------------------- Type Coercion in Comparisons --------------------
console.log("'2' > 1:", "2" > 1)   // true, string converted to number
console.log("'02' > 1:", "02" > 1) // true, string converted to number

// this type of comparison should be avoided
console.log("null > 0:", null > 0)   // false
console.log("null == 0:", null == 0) // false
console.log("null >= 0:", null >= 0) // true (confusing behavior)


// strict checks (value + type)
console.log("\nStrict Checks (value + type):")
console.log("2 === 2:", 2 === 2)       // true
console.log("2 === '2':", 2 === '2')   // false
console.log("2 !== 2:", 2 !== 2)       // false
console.log("2 !== '2':", 2 !== '2')   // true

// Notes:
// '==' checks value after type coercion
// '===' checks value AND type, recommended for most comparisons
