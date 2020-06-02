"use strict";
// naam: 
export default class Course {
    constructor(id){
        if(isNaN(id)){
            throw new Error("id must be a number");
        }
        this._id = id;
        this._grade = 0;
        this._completed = false;
    }

    getId(){
        return this._id;
    }
    getGrade(){
        return this._grade;
    }
    getCompleted(){
        return this._completed;
    }
    setId(id){
        if(isNaN(id)){
            throw new Error("id must be a number");
        }
        this._id=id;
    }
    setGrade(grade){
        if(isNaN(grade)){
            throw new Error("id must be a number");
        }
        this._grade=grade;
    }
    setCompleted(completed){
        if(!(comepleted instanceof Boolean)){
            throw new Error("completed must be a boolean");
        }
        this._completed=completed;
    }
}
