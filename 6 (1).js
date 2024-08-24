//!Змінна та константа
console.log(1)
let a = 5
console.log(5)
a = 7
console.log(a, typeof (a))
const b = 6
console.log(b)
// b =7
// console.log(b)
//! Типи даних
a = 7, 1
console.log(a, typeof (a))
a = "2"
console.log(a, typeof (a), a + a)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(typeof (arr), arr)
console.log(arr.length)
console.log(arr[2])
let obj = {
    name: "Denis",
    age: 13,
    city: "Berezne"
}
console.log(obj)
console.log(obj.name)
function matchSum(a, b) {
    a = a * 2
    return console.log(a + b)
}
matchSum(5, 5)
//! Арифметичні операції
//? + - / % *,



//! Об'єкти та функції




//! Форми розгалуження
let a1 = 5
let a2 = 6
if (a1 * a2 > 20) {
    console.log('Добуток чисел більший двадцяти')
} else {
    console.log('Добуток чисел менший')
}
a1 * a2 > 20
    ? console.log('Добуток чисел більший двадцяти')
    : console.log('Добуток чисел менший')