//FUNCTION TYPES

//1.FUNCTION DECLARATION

function add(){

    let a =10
    let b =20
    console.log(a+b)

}

add()

//parameter passing different way

function sub (a,b){
    console.log(a-b)

}

sub(10,5)
sub(20,10)

//function can be reused so we can give n no of values to a single variable


//2.FUNCTION EXPRESSION

let info=function(name, age){

    console.log("my name is " + name, "my age is " +age )
}
info("vikku", 7)

//3.ARROW FUNCTION  => (Equal) ; here function word will not be used

let movie = (ticket, snacks, transportation) => {
    console.log(ticket+snacks+transportation)
}
movie(150,200, "array")

//4.IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function (){

    console.log("hellow world")
}) ()