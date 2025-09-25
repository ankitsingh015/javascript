// ---------------------------------------------------
// Stack vs Heap in JavaScript
// ---------------------------------------------------

/*
  Stack Memory
- Stores primitive values: String, Number, Boolean, null, undefined, Symbol, BigInt.
- Copy of the value is created when assigned to another variable.
*/

let myName = "Ram"
let anotherName = myName   // copy is created
anotherName = "Shyam"

console.log("Stack Example:")
console.log("myName:", myName)           // "Ram" (unchanged)
console.log("anotherName:", anotherName) // "Shyam" (new copy)


/*
👉 Heap Memory
- Stores non-primitive values: Objects, Arrays, Functions.
- Variables hold a reference to the object.
- If one variable modifies the object, it reflects in the other too.
*/

let userOne = {
    email: "ram@example.com",
    upi: "ram@ybl"
}

let userTwo = userOne    // reference, not copy
userTwo.email = "shyam@example.com"

console.log("\nHeap Example:")
console.log("userOne:", userOne) // email changed
console.log("userTwo:", userTwo) // same reference


/*
📝 Key Takeaways:
- Stack (primitives) → copied by value.
- Heap (non-primitives) → assigned by reference.
*/
