//OPERATOR

function arithmetic (){

let a = 10;
let b = 5;

console.log(a+b, a-b, a*b, a/b, a%b, a**b)

}

arithmetic()

//2nd Way normallly thatrlam function is only for structured way
let a = 10;
let b = 5;

console.log(a+b, a-b, a*b, a/b, a%b, a**b)

//INCREMENT & DECREMENT

function arithmetic (){

let a = 10;
let b = 5;

console.log(a+b, a-b, a*b, a/b, a%b, a**b)

a++
console.log(a);
b--
console.log(b);

++a
console.log(a);
--b
console.log(b);


}

arithmetic()



//2. ASSIGNEMENT OPERATOR


function assignment(){
let a = 20;
let b = 30;

//console.log(a+=b); //a=a+b
//console.log(a);

console.log(a+=b, a-=b, a*=b) //1st a values get stored a= a+b (50), a-=b ... 50 = 50-20 = 30
console.log(a);

}

assignment()

//3.COMPARISION OPERATOR

function comparison(){

    let a=10;
    let b =5;
    let c ="5";

    console.log(a!=b)
    console.log(b!=c)
    console.log(b!==c) //this !== will strictly check including the datatype
    console.log(a>b);
    console.log(a<b);
    console.log(a>=b)
    console.log(b<=c)
   
}
comparison()


//4. LOGICAL OPERATORS

// && --> and
//|| --> or

// ! --> not

let n = 15;
let r = 15;
console.log(n!=r); //(only != is allowed here, no !<, !> comparison)


//5.STRICT OPERATORS

// == --> LOOSE EQUALITY / DOUBLE EQUAL

let y = 10;
let z = "10";
console.log(y == z);


//=== ---> STRICKT EQUALITY/ TRIPLE EQUAL

let y1 = 10;
let z1 = "10";
console.log(y1 === z1);


//6. TERNARY OPERATORS

// syntax

// variable name (condition)? "true value" : "false value"

// kodukra condition true or false nu check panum

let age = 25;
let result = (age>=18)? "eligible" : "not eligible"
console.log(result);

//using && operator

let age1 = 25;
let result1 = (age1>=18 && age1<=18)? "eligible" : "not eligible"
console.log(result1);

// while giving and operator even if one condition fails, it will return false value only


//using || (or) operator

let mark = 56;
let rank = (mark >=35 || mark <=100)? "pass" : "fail"
console.log(rank);

// in OR operator if anyone condition satisifes also, it will return true value only

let mark1 = 5;
let rank1 = (mark1 >=35 || mark1 <=100)? "pass" : "fail"
console.log(rank1);

