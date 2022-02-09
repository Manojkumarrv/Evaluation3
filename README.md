# Evaluation3

### Q1

### ALGORITHM

step1:start the program. create an object.

step2:use THIS to refer to the property.

step3:call the obj and name .

step4:print the output.

step5:end the program.

### PSEUDOCODE
```
LET obj = {
    name : "hangama",
    channelNo : 27,
    tv : function () {
    THIS.name = () => {PRINT(THIS.channelNo);}   
  }
  };
  obj.tv() ;
  obj.name();
  
  LET channel = obj.name;
  channel();
```  
### Q2

### ALGORITHM

step1:start the program.create a function.

step2:use IF to check the condition .if the length is equal to zero print the output.

step3:else use for loop to run a condition specification and print the output.

step4:IT the length of string is less than zero print this is an empty string else this is not string.

step5:print the output.

step6:end the program.

### PSEUDOCODE
```
LET string="ABC";
FUNCTION permutation( string, result){
    IF(string.length === 0){
        count++;
        PRINT(result);
    }ELSE{
        FOR(let i = 0; i < string.length ; i++ ){
            LET remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        }
    }
}
IF(typeof string === "string"){
    IF(string.length > 0){
        VAR count = 0;
        permutation( string, "");
        PRINT("Total number of permutation are :",count);
    }ELSE{
        PRINT("This is empty string");
    }

}ELSE{
    PRINT("This is not string")
}
```
### Q3

### ALGORITHM

step1:start the program with HTML doc.

step2:use arrow function.event callback the function.

step3:print the output.

step4:start the program with HTML doc

step5:create a function and make event callback.

step6:print the output.

step7:end the program.

### PSEUDOCODE
```
<!DOCTYPE html>
<html lang="en">
<HEAD>
</HEAD>
<BODY>
   <SCRIPT>
            LET clicked = () =>{
                PRINT("You Clicked!!!");
                PRINT(this)
            }
            DOCUMENT.GETELEMENTBYID("click",clicked);
   </SCRIPT> 
</BODY>
</HTML>
<!DOCTYPE html>
<HTML lang="en">
<HEAD>
    
</HEAD>
<body>
    <SCRIPT>
    FUNCTION clicked(){
        PRINT("You Clicked!!!");
        PRINT(this)
    }
    DOCUMENT.GETEVENTLISTNER("click",clicked);
    </script>
</body>
</html>
```
### Q4

### ALGORITHM

step1:start the program.

step2:use FOR loop to print numbers from 0 to 10. 

step3:use SETTIMEOUT function to print the output after 1 sec.

step4:print the output.

step5:end the progrsam.

### PSEUDOCODE
```
FOR(var i = 0; i <= 10; i++) {
    FOR(let k=i; k<=i; k++)
    SETTIMEOUT(function() {
    PRINT(k);
    }, 1000*k);
    }
```    
### Q5

### ALGORITHM

step1:start the program.

step2:use class method to create an object.use this to refer to the params

step3:create instance to call the the class object. 

step4:print the output.

step5:end the program.

### PSEUDOCODE
```
CLASS book{
    CONSTRUCTOR(books,NoofBooks){
    THIS.books = books;
    THIS.NoofBooks = NoofBooks;
    }
    Noofbooks(){
      PRINT("Total no of books "+ this.NoofBooks);
    }
  }
  CONST Books = new book('Harry potter',12);//instance
  Books.Noofbooks();

//   console.log(book.Noofbooks); //Static


  CLASS book1{
    
    static Noofbooks(books, NoofBooks){
      RETURN "Total no of books "+ NoofBooks +" " + books;
    }
  }

PRINT(book1.Noofbooks("c", 45));
```
### Q6

### ALGORITHM

step1:start the program.create an class object.

step2:use 'THIS' to refer to the object

step3:return 'THIS' .create an instance.call the function.

step4:print the output.

step5:end the program.

### PSEUDOCODE
```
CLASS TestClass {
    CONSTRUCTOR(myName) {
        THIS.name = myName;
    }

    updateName() {
        RETURN this.name;
    }
}

TestClass.updateName2 = function() {
    PRINT(this.name);
};

VAR test = new TestClass("Joe");

PRINT(test.updateName());

TestClass.updateName2();
```
### Q7

### ALGORITHM

step1:start the program.

step2:enter CONST to create an arrow function.

step3:use SETTIMEOUT function to print the output after an second

step4:print the output.

step5:end the program.

### PSEUDOCODE
```
CONST ex1 = () => console.log('ex1');
CONST ex2 = () => console.log('ex2');
CONST ex = () => {
PRINT('ex');
SETTIMEOUT(ex1, 1000);
ex2();
}
ex();
```
### Q8

### ALGORITHM

step1:stert the program.

step2:for the event loop method create an function.

step3:use SETTIMEOUT to print the program after few seconds.

step4:print the output.

step5:end the program.

### PSEUDOCODE
```
(FUNCTION(){
    PRINT("this is first");
    SETTIMEOUT(() => {
        SETTIMEOUT("this is forth");
        },500);
    PRINT("this is second");
    SETTIMEOUT(() => {
       PRINT("this is fifth"); 
    }, 1000);
    PRINT("this is third");
}());
```
### Q9

### ALGORITHM

step1:start the program.

step2:use GETELEMENTBYID to call the id

step3:use ADDEVENTLISTNER to add an event.create an function to add an event.

step4:print the output.

step5:end the program.

### PSEUDOCODE
```
<!DOCTYPE html>
<HTML lang="en">
<HEAD>
    
</HEAD>

<BODY>
    <BUTTON STYLE="color: royalblue;" ID="buttondemo"> click this</BUTTON>

    <SCRIPT>
        DOCUMENT.GETELEMENTBYID("buttondemo").addEventListener("click",myfunction);

        FUNCTION myfunction(){
            ALERT ("custom evenet listner");
        }
    </SCRIPT>
    
</body>
</html>
```
### Q10

### ALGORITHM

step1:start the program.create an class object.

step2:use 'THIS' to refer to the params in the constructor.

step3:use instance method to create a new person.

step4:print the output.

step5:end the program.

### PSEUDOCODE
```
CLASS person{
    CONSTRUCTOR(name,age){
        THIS.name = name;
        THIS.age = age;
    }
}
CLASS Student extends person{ // extends => the child class inherits or acquires all the properties of the parent class. ...
      CONSTRUCTOR(name,age,gpa){
          SUPER(name,age);
          THIS.gpa = gpa;
      }
    }
CLASS Teacher extends person{
        CONSTRUCTOR(name,age,classSize){
            SUPER(name,age);
            THIS.classSize = classSize;
    }
    }
    LET Student1 = new Student("hari",20,7.5);
    LET Teacher1 = new Teacher("vatsan",40,10);

    PRINT(Student1.name +"age is "+ Student1.age + "his gpa is "+Student1.gpa);
    PRINT(Teacher1.name +"age is "+ Teacher1.age + "his classSize was "+Teacher1.classSize);



    //constructor

    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
    }

    let person1 = new Person("sam",12);
    console.log(person1);
```    
