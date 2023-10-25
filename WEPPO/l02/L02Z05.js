var ob = {
    pole: "abc", // pole
    num: 2, // w�a�ciwo�ci (properties)

    get foo() { //od strony korzystaj�cego to pole, od pisz�cego to metoda
        return ob.num;
    },
    set foo(x) {
        ob.num = x;
    }
}

console.log(ob.num)
console.log(ob.foo)
//console.log(ob.foo(3))
ob.foo = 4
console.log(ob.foo)

// mo�emy mie� tylko jeden akcesor (czyli inaczej ni� w polach)
// �atwo dodawa� now� metod� lub pole

 console.log(ob)

 // dodanie pola

 console.log("\n----------------\nDodanie pola\n")

 ob.name = "xyz"
 Object.defineProperty( ob, "nowePole", {
    value: 5
 })
 console.log(ob)
 ob.nowePole = 3
 console.log(ob.nowePole) // nie mo�na zmieni� bo nie pozwolili�my na to w defineProperty

 // dodanie metody

 console.log("\n----------------\nDodanie metody\n")

 Object.defineProperty( ob, "nowaMetoda", { // PYTANIE: dlaczego si� nie wy�wietla?
    value: function (x) {
        return x + 2
    }
 })

 console.log(ob)
 console.log(ob.nowaMetoda(7))

 ob.nowaMetoda2 =  function (y) {
        return "result"
}
 
console.log(ob.nowaMetoda2(7))
console.log(ob)

// dodanie w�asno�ci (mo�na tylko w jeden spos�b)

console.log("\n----------------\nDodanie wlasnosci\n")

(function() {
    var nowaWlas = 22 // PYTANIE czy mo�na to zrobi� bez tej zmiennej?
    Object.defineProperty(ob, "nowaWlas", {
        get: function() {
            return nowaWlas
        },
        set: function(x) {
            nowaWlas = x
        }
    })
})()



console.log(ob.nowaWlas)
ob.nowaWlas = 4
console.log(ob.nowaWlas)
console.log(ob)
