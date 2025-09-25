// Current date & time
const now = new Date()
console.log("Current date & time:", now)

// Specific date (YYYY, MM-1, DD, HH, MM, SS, MS)
const myBirthday = new Date(2000, 5, 15, 10, 30, 0)
console.log("My birthday:", myBirthday)

// Timestamps → milliseconds since Jan 1, 1970
console.log("Timestamp now:", now.getTime())


console.log("\nGetting components:")
console.log("Year:", now.getFullYear())
console.log("Month (0-11):", now.getMonth())
console.log("Date:", now.getDate())
console.log("Day (0-Sunday):", now.getDay())
console.log("Hours:", now.getHours())
console.log("Minutes:", now.getMinutes())
console.log("Seconds:", now.getSeconds())
console.log("Milliseconds:", now.getMilliseconds())


const future = new Date()
future.setFullYear(2025)
future.setMonth(11)  // December (0-based)
future.setDate(31)
future.setHours(23)
future.setMinutes(59)
future.setSeconds(59)

console.log("\nModified future date:", future)


console.log("\nDate formatting:")
console.log("toDateString():", now.toDateString())
console.log("toTimeString():", now.toTimeString())
console.log("toLocaleDateString():", now.toLocaleDateString())
console.log("toLocaleTimeString():", now.toLocaleTimeString())
console.log("toISOString():", now.toISOString())


const tomorrow = new Date(now.getTime() + 24*60*60*1000) // add 1 day
console.log("\nTomorrow is:", tomorrow)
