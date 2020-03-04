import {Person} from "./js/person";
import {Teacher} from "./js/teacher";

function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }

    /*
    * If we define i by var it is accessible here and we will see 5
    * If we define i by let then it is accessible in the code block it is defined
    *
    * var -> scoped to the function
    * let -> scoped to the block
    * const -> scoped to the block
    * */
    //console.log(i);

    //const x = 10;
    //x = 12;
}

sayHello();

const personObject = {
    name: 'Maziar',
    /*
    * Every function is javascript is an object
    * */
    walk: function () {
        /*
        * this : Belongs to the current object
        * */
        console.log("Name is : " + this.name)
    },
    talk() {
        console.log("Talk")
    }
};

personObject.walk();
personObject.talk();

const targetMember = "name";
personObject[targetMember] = "Jimmy";
personObject.walk();

/*
* personObject.walk does not call the walk method in person object it just reference to it
* */
const walk = personObject.walk;

/*
* When we call an object as standalone function outside the object "this" refers to global object or window
* object and if strict mode is enabled it returns undefined
* */
//  walk();

/*
* Now we bind function to an object
* With bind method "this" method will work properly
* In walkBind the value of this is bind to person object
* */
const walkBind = personObject.walk.bind(personObject);
walkBind();

/*
* Arrow Functions
* */
const square = function (number) {
    return number * number;
};

const squareArrow = (number) => number * number;

console.log(square(10));
console.log(squareArrow(10));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: false},
    {id: 4, isActive: true},
];

/*
* Here filter take each object in jobs and pass it to the predicate function
* */
const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);

/*
* This keyword in a callback function
* Because the callback function is not part of any object its a standalone function so "this" refers to global object
* the strict mode does not work in callback functions
* */
const employee = {
    talk() {
        //var self = this;
        setTimeout(function () {
            console.log("this ", this)
        }, 1000);
    }
};
employee.talk();

/*
* In Arrow functions "this" will not reset to global object instead it will inherit from the object
* */
const employee2 = {
    talk() {
        setTimeout(() => {
            console.log("this ", this)
        }, 1000);
    }
};
employee2.talk();

/*
* Array.map()
* */
const colors = ['red', 'green', 'white'];
/* Use Template Literal `${}` */
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

/*
* Spread Operator applies in arrays and objects as below
* */
const first = [1, 2, 3, 4];
const second = [4, 5, 6, 7];
const combined = [...first, 'a', ...second, 'b'];
console.log("Combined : " + combined);

const firstObject = {name: 'Maziar'};
const secondObject = {job: 'Developer'};
const combinedObject = {...firstObject, city: 'Tehran', ...secondObject}
console.log(combinedObject);

/*
* Classes
* */
const personClass = new Person("James");
const teacherClass = new Teacher("Jimmy", "MSc");
console.log("personClass.name : " + personClass.name + " , " + "teacherClass.name : " + teacherClass.name);
personClass.walk();
teacherClass.teach();