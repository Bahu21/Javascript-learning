const name = "Bahulashwa Kamble"
let city = "nagpur"
var area = "Manish nagar"
pin = 440022

console.table([name, city, area, pin])

city = "test"

// we cannot change assignment of const
/* do not use var beacuse of issue in block scope and functional scope

always use let instead of var*/
pin = 56646465

console.log(pin)