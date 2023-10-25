/**
 * typeof zwraca typ, dzia�a dla typ�w prostych
 */

console.log(typeof 22)
console.log(typeof "abc")
console.log(typeof true)
console.log(typeof undefVar)
console.log(typeof function (x) {return x})
console.log(typeof Symbol('a'))

console.log("\n--------------------------\n")

/**
 * instanceof dzia�a po opakowaniu typu (boxing) lub kiedy tworzymy w�asne typy
 */

a = Number(1)
if( a instanceof Number ) {
    console.log("a jest liczba")
}
console.log("typ a: ", typeof a)

b = new Number(1)
if( b instanceof Number ) {
    console.log("b jest liczba")
}
console.log("typ b: ", typeof b)