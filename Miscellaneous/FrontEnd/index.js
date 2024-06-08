class Person {
  constructor(name, age) {
    console.log("Person constructor called");
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log("Person is talking");
  }
}

class Student extends Person {
  constructor(name, age, batch, marks, rollNo) {
    console.log("Student constructor called");
    super(name, age);
    this.batch = batch;
    this.marks = marks;
    this.rollNo = rollNo;
  }

  study() {
    console.log("Student is studying");
  }
}

class Teacher extends Person {
  constructor(name, age, subject, salary) {
    console.log("Teacher constructor called");
    super(name, age);
    this.subject = subject;
    this.salary = salary;
  }

  teach() {
    console.log("Teacher is teaching");
  }
}
