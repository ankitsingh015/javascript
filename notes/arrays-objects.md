# Arrays & Objects in JavaScript

## 📌 Arrays

- Ordered collection of elements.
- Can store any type: numbers, strings, booleans, objects, even other arrays.
- Arrays are **mutable** and are of type `"object"` in JS.

### Common Methods

- `push()` → add element at end.
- `pop()` → remove element from end.
- `unshift()` → add element at beginning.
- `shift()` → remove element from beginning.
- `indexOf(value)` → returns index of first occurrence.
- `splice(start, deleteCount)` → remove/replace elements.
- `concat(arr)` → merge arrays (returns new array).
- `[...arr1, ...arr2]` → spread operator for merging.
- `flat(depth)` → flattens nested arrays.
- `Array.isArray(value)` → check if array.
- `Array.from(iterable)` → creates array from iterable/string.
- `Array.of(...args)` → creates array from arguments.

---

## 📌 Objects

- Collection of key–value pairs.
- Keys are strings (or `Symbols`).
- Values can be any type.

### Access & Update

- Dot notation → `obj.key`
- Bracket notation → `obj["key"]`
- Update → `obj.key = newValue`
- Add property → `obj.newKey = value`
- Delete property → `delete obj.key`

### Special Features

- **Symbols** → unique keys:
  ```js
  const sym = Symbol("id")
  obj[sym] = 123
  ```

* **Object.freeze(obj)** → prevents modifications (shallow).
* **Utilities**:

  * `Object.keys(obj)` → array of keys.
  * `Object.values(obj)` → array of values.
  * `Object.entries(obj)` → array of `[key, value]`.
  * `Object.assign(target, ...sources)` → merge objects.
  * Spread syntax `{ ...obj1, ...obj2 }`.

### Looping

* `for...in` → loop over keys.
* `Object.entries(obj)` with `for...of` for both key & value.

---

## 📌 Destructuring

* Extract values from objects/arrays directly into variables.

```js
const { name, age } = user
const { city } = user.address
const [first, second] = fruits
```

* Rename: `const { name: userName } = user`
* Defaults: `const { role = "guest" } = user`

---

## 📌 JSON (JavaScript Object Notation)

* Lightweight data format (used in APIs, config).
* Keys & strings must use **double quotes**.

### Convert between JSON and JS:

* `JSON.parse(jsonString)` → JSON string → JS object.
* `JSON.stringify(jsObject)` → JS object → JSON string.

```

```
