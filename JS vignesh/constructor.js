// CONSTRUCTOR 

class student{

    constructor(name, age, DOB, qualification, status){

        this.name = name;
        this.age = age;
        this.DOB = DOB;
        this.qualification = qualification;
        this.status = status;
        
    }

    output() /// similar to method inside class
    {
console.log( ` 
    name of student ${this.name}

    age ${this.age}

    DOB ${this.DOB}

    qualification ${this.qualification}

    status ${this.status} `);

    }
}

const detail = new student("KIVI", "20", "29/08/2025", "PG", "NA") // similar to jave class object = new class ()

detail.output(); // variable.method will be called

