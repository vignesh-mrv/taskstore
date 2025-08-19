//=========Map, Reducer, FILTER===============


//1...............MAP

//variable name.map((value, indes, accumulator))=>)


    // to use value

    let a = [10, 20, 30, 40, 50, 60]
    let b = a.map((val, ind, acc) =>val+5)
console.log(b);

// to use index only

 let c = [10, 20, 30, 40, 50, 60]
    let d = c.map((val, ind, acc) =>ind+5)
console.log(d);

// to use only ACC


 let e = [10, 20, 30, 40, 50, 60]
    let f = e.map((val, ind, acc) =>acc+5)
console.log(f);

// if multiplied it will show NaN, 
// ADDED ---- Lasr digit only number will be added




//2.....................Filter

//variable name.filter ((value, index, accumulator) =>)

// here only comparision operator should be used rest will not work

//value

    let fil = [10, 20, 1,111, 222, 435874358, 45, 676, 44345435];
    let clean = fil.filter((val) => val<5);
    console.log(clean);

    //index


     let fil1 = [10, 20, 1,111, 222, 435874358, 45, 676, 44345435, 2, 9];
    let clean1 = fil1.filter((val,ind) => ind>10); // am giving index > 10 so index which is more than 10 will be printed
    console.log(clean1);

    //accumulator


     let acc = [10, 20, 1,111, 222, 435874358, 45, 676, 44345435, 2, 9];
    let n = acc.filter((val,ind, acc) => acc>5); // acc will not work
    console.log(n);


    //3......................FILTER

    // variable name.reduce((accumulator, actualarray)=>)

        let red = [10, 20, 30, 40];
        let ad = red.reduce((x,y) => x+y) // here x is accumulator which is entire thing given in 2D block ([]), 
        // y is actual array, here all the values in array will be stored
console.log(ad);
