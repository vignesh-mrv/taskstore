//===================== ARRAY METHODS =======================

//1. push() ========= adds element to last

let a = [10,20,30,40];
a.push(50);
console.log(a);


//2. pop() ========removes element from last

let p = [10,20,30,40];
p.pop();
console.log(p);

//3. Shift() ============== Removes element from 1st

let s = [10,20,30,40];
s.shift();
console.log(s);


//4. UnShift() ============== Removes element from 1st

let u = [10,20,30,40];
u.unshift();
console.log(u);


//5. Sort() ============== sorts the element of array

let st = ["apple", "watermelon", 1, "25", "nimbu"];
console.log(st.sort());


//6. reverse() =========== reverse elements in an array

let r = "nir";
console.log(r.split("").reverse("").join(""));

//7. splice() =====used to add or remove/replace an element from the array

let days = ["sun", "mon", "tues", "wed", "fri", "sat", "sun"];
days.splice(4, 0, "thurs"); // 0 ==== > used to add the element in the given index passed
console.log(days);


let days1 = ["sun", "mon", "tues", "wed", "fri", "sat", "sun"];
days1.splice(4, 0, "thurs"); // 1 ==== > used to rmove and replace the element in the given index passed
console.log(days1);
