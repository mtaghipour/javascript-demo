/*
* Class inheritance
* */
import {Person} from "./person";

function promote(){

}

export class Teacher extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    teach() {
        console.log("Teach")
    }
}