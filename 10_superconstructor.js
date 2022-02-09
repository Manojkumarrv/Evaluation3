//super keyword in Java is a reference variable which is used to refer immediate parent class object

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Student extends person{ // extends => the child class inherits or acquires all the properties of the parent class. ...
      constructor(name,age,gpa){
          super(name,age);
          this.gpa = gpa;
      }
    }
class Teacher extends person{
        constructor(name,age,classSize){
            super(name,age);
            this.classSize = classSize;
    }
    }
    let Student1 = new Student("hari",20,7.5);
    let Teacher1 = new Teacher("vatsan",40,10);

    console.log(Student1.name +"age is "+ Student1.age + "his gpa is "+Student1.gpa);
    console.log(Teacher1.name +"age is "+ Teacher1.age + "his classSize was "+Teacher1.classSize);



    //constructor

    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
    }

    let person1 = new Person("sam",12);
    console.log(person1);
