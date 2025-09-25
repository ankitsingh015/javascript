# Fundamentals of JavaScript 🚀

This document summarizes the **core fundamentals of JavaScript**:  
variables, data types, type conversion, operations, and comparisons.  

---

## 🟢 Variables: var, let, const

### var
- Function-scoped.
- Can be re-declared and updated.
- **Avoid using** due to scope-related issues.

```js
var score = 100
score = 95
console.log(score) // 95
```

### let

* Block-scoped.
* Can be updated but **not re-declared** in the same scope.

```js
let cgpa = 8.46
cgpa = 9.0
console.log(cgpa) // 9.0
```

### const

* Block-scoped.
* **Cannot be reassigned** .
* Must be initialized at declaration.

```js
const rollId = 15
// rollId = 20 // ❌ Error
```

✅ **Best Practices:**

1. Use `const` by default.
2. Use `let` only if you plan to reassign.
3. Avoid `var`.

---

## 🟡 Data Types

### Primitive

* **String** → `"ram"`
* **Number** → `22`, `3.14`
* **Boolean** → `true` / `false`
* **Null** → represents intentional "no value"
* **Undefined** → variable declared but not assigned
* **Symbol** → unique & immutable identifier (ES6+)
* **BigInt** → very large integers

### Non-Primitive

* **Object** → key-value pairs
* **Array** → ordered collection (special object)

```js
let name = "ram"          // string
let age = 22              // number
let isStudent = true      // boolean
let score = null          // null
let grade                 // undefined
let address = { city: "Delhi", country: "India" } // object
let hobbies = ["reading", "coding"] // array
```

### typeof Operator

```js
console.log(typeof "ram")      // string
console.log(typeof 22)         // number
console.log(typeof null)       // object ❌ (quirk)
console.log(typeof undefined)  // undefined
console.log(typeof [])         // object (arrays are objects)
```

---

## 🔵 Type Conversion

### String → Number

```js
Number("33")     // 33
Number("33abc")  // NaN
Number(true)     // 1
Number(false)    // 0
Number(null)     // 0
Number(undefined) // NaN
+"123"           // 123 (unary plus)
```

### Number → String

```js
String(99)        // "99"
(123).toString()  // "123"
```

### Boolean Conversion

```js
Boolean("")       // false
Boolean("hi")     // true
Boolean(0)        // false
Boolean(1)        // true
```

---

## 🧮 Operations

### Arithmetic

```js
2 + 2   // 4
2 - 2   // 0
2 * 2   // 4
2 ** 3  // 8 (power)
5 % 2   // 1 (remainder)
```

### String Concatenation

```js
"hello" + " world" // "hello world"
"1" + 2            // "12"
1 + "2"            // "12"
1 + 2 + "2"        // "32"
"1" + 2 + 2        // "122"
```

### Increment / Decrement

```js
let counter = 1
console.log(counter++) // 1 (use then increment)
console.log(++counter) // 3 (increment then use)
```

---

## 🔴 Comparisons

### Basic Comparisons

```js
2 > 2   // false
2 >= 2  // true
2 < 2   // false
2 <= 2  // true
```

### Loose Equality (`==`)

* Converts types before comparing.

```js
"2" == 2  // true
null == 0 // false
```

### Strict Equality (`===`)

* Checks **value and type** (recommended).

```js
2 === 2   // true
2 === "2" // false
```

### Weird Case: null

```js
null > 0   // false
null == 0  // false
null >= 0  // true ❓
```

⚠️ Avoid comparing `null` or `undefined` directly with numbers.

---

## ✅ Key Takeaways

* Prefer `const`, then `let`, avoid `var`.
* Always use `===` for equality.
* `typeof null` is `"object"` (JS bug).
* Be careful with type coercion in comparisons and operations.

```

```
