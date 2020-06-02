"use strict";
import Course from './Course';
// naam: 
export default class Student{
    constructor(id){
        if(isNaN(id)){
            throw new Error("id must be a number");
        }
        this._id = id;
        this._courses=[];
    }
    addCourse(course){
        if(!(course instanceof Course)){
            throw new Error("parameter must be a course");
        }
        this._courses.push(course);
    }
    calculateGrade(){
        let numberOfCompletedCourses = 0;
        let sum = 0;
        for (let course of this._courses){
            if (course.getCompleted() == true){
                sum += course.getGrade();
                numberOfCompletedCourses++;
            }
        }
        if (numberOfCompletedCourses == 0){
            throw new Error("no courses completed");
        }
        return sum/numberOfCompletedCourses;
    }
}
