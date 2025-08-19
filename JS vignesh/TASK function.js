//TASK 1 ---- CALCULATED AREA

//function declaration
function calculatedarea(){

    let length = 10;
    let width = 15;

    console.log(length*width)
}
calculatedarea();

//function expression

let calculatedarea = function(length, width){

    console.log("area is " +length*width);
}
calculatedarea(10,5);

//ARROW FUNCTION
let calculatedarea = (length, width) => {

    console.log("area is " +length*width);
}
calculatedarea(10,5);


//TASK CALCULATED RESULT

let calculatedresult = (tamil, english, maths, science, social) => {

    console.log((tamil+english+maths+science+social)/500 *100);
}
calculatedresult (91,92,100,95,97);


function calculatedresult(){

    let tamil = 92;
    let english = 91;
    let maths = 100;
    let science = 95;
    let social = 90;
    
    console.log((tamil+english+maths+science+social)/500 *100);
}
calculatedresult();



