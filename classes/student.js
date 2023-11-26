const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static printGPA(student) {
    return `${student.firstName} ${student.lastName} has the higher GPA.`;
  }
  static compareGPA(student1, student2) {
    const [GPA1 , GPA2] = [student1.GPA, student2.GPA];

    if (GPA1 > GPA2) {
      return this.printGPA(student1);
    } else if (GPA2 > GPA1) {
      return this.printGPA(student2);
    } else {
      return `Both students have the same GPA`;
    }

  }

}

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
