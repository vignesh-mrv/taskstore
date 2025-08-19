//Datatype

//primitive

//string
let str ="edel";
console.log(typeof str);

//number
let num =25;
console.log(typeof num);

//boolean
let nut = false;
console.log(typeof nut);

//Bigint = undefined

let bt = 24235325436436436436436346n;

console.log(typeof nut);

//null = object

let nl = null;
console.log(typeof nl);

//undefined = undefined

let d;
console.log(typeof d);

//non-primitive

//ARRAY = OBJECT

let arr=["", "app", "orr"];
console.log(arr, typeof(arr))
console.log(arr[1])


//OBJECT = OBJECT

let obj ={

    name:"vignesh",
    age:"10"

}

console.log(obj, typeof(obj))

//FUNCTION - SIMILAR TO METHOD , WE WILL DECLARE INSIDE BRACKET

function add(){

    console.log("HI")
}
//SIMILAR TO OBJECT CALLED IN MAIN METHOD
add()