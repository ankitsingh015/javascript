# Execution Context in JavaScript ⚙️

JavaScript runs code in two phases using something called an **Execution Context**.

---

## 🟢 What is Execution Context?

- It’s the **environment** in which JS code is evaluated and executed.
- Every JS program runs inside a **Global Execution Context (GEC)**.
- Each function call creates a new **Function Execution Context (FEC)**.

---

## 🔄 Two Phases of Execution

### 1. Memory Creation Phase (a.k.a. Hoisting)

- JS scans the code.
- Variables are allocated memory with default values:
  - `var` → initialized as `undefined`
  - `let` & `const` → allocated in "Temporal Dead Zone" (not accessible yet)
  - Functions → full function is stored in memory

### 2. Execution Phase

- Code runs line by line.
- Variables get actual values assigned.
- Functions are executed when called.

---

## 📦 Call Stack

- JS uses a **Call Stack** (a stack data structure) to keep track of execution contexts.
- Global Execution Context is created first → stays until the program ends.
- When a function is invoked → new FEC is created and pushed to the stack.
- When the function finishes → FEC is popped out.

---

## 🔍 Example

```js
let val1 = 10
let val2 = 20

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(5, 15)

console.log(result1) // 30
console.log(result2) // 20
```

---

### Step-by-Step Execution:

1. **Global Execution Context created**
   * `val1` → undefined
   * `val2` → undefined
   * `addNum` → function definition stored
   * `result1` → undefined
   * `result2` → undefined
2. **Execution Phase**
   * `val1 = 10`
   * `val2 = 20`
   * `result1 = addNum(val1, val2)`
     * new FEC created:
       * `num1 = 10`
       * `num2 = 20`
       * `total = 30`
     * returns `30`
   * `result2 = addNum(5, 15)`
     * another FEC created:
       * `num1 = 5`
       * `num2 = 15`
       * `total = 20`
     * returns `20`

---

## ✅ Key Takeaways

* Everything in JS runs inside an  **execution context** .
* Two phases: **Memory creation** +  **Execution** .
* Functions get their own execution context.
* Call Stack keeps track of which function is running.
