import Course from '../../../src/js/school/Course';
import Student from '../../../src/js/school/Student';
// naam:
test('no courses completed should throw error', () => {
    expect(() => {
        let student=new Student(1);
        let course3=new Course(121);
        student.addCourse(course3);
        let grade = student.calculateGrade();
    }).toThrow();
});

test('student with one course graded 12 should calculate a 12',    () => {
    let student=new Student(1);
    let course=new Course(101);
    course.completed=true;
    course.grade=12;
    student.addCourse(course);
    let grade = student.calculateGrade()
    expect(grade).toBe(12);
});


