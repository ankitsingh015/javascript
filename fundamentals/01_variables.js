
const rollId = 15       
var score = 100         
let cgpa = 8.46         

// -------------------- Logging Initial Values --------------------
console.log("Initial Values:")
console.log("Roll ID:", rollId)
console.log("Score:", score)
console.log("CGPA:", cgpa)

// console.table gives a neat tabular display of variables
console.table({rollId, score, cgpa})

// -------------------- Reassigning Variables --------------------
// rollId is a constant and cannot be reassigned
// rollId = 20
score = 95  
cgpa = 9.0   

console.log("After Reassignment:")
console.table({rollId, score, cgpa})

// -------------------- Scope Demonstration --------------------
if (true) {
    var functionScoped = "I am function scoped (var)"   // accessible outside the block
    let blockScoped = "I am block scoped (let)"        // only accessible inside block
    const blockConst = "I am block scoped (const)"    // block scoped
    console.log("Inside if block ->", functionScoped, blockScoped, blockConst)
}

// Outside the if block
console.log("Outside if block -> functionScoped:", functionScoped) 
// console.log(blockScoped) // Uncommenting will throw error
// console.log(blockConst)  // Uncommenting will throw error


// -------------------- Best Practices --------------------
// 1. Use const by default unless you know the variable will change
// 2. Use let for variables that will change
// 3. Avoid var to prevent scope-related issues
// 4. Use meaningful variable names to improve readability
