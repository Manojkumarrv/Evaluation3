# Evaluation3
### Q1
### ALGORITHM
### PSEUDOCODE
```
let obj = {
    name : "hangama",
    channelNo : 27,
    tv : function () {
    this.name = () => {console.log(this.channelNo);}   
  }
  };
  obj.tv() ;
  obj.name();
  
  let channel = obj.name;
  channel();
```  
### Q2
### ALGORITHM
### PSEUDOCODE
```
let string="ABC";
function permutation( string, result){
    if(string.length === 0){
        count++;
        console.log(result);
    }else{
        for(let i = 0; i < string.length ; i++ ){
            let remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        }
    }
}
if(typeof string === "string"){
    if(string.length > 0){
        var count = 0;
        permutation( string, "");
        console.log("Total number of permutation are :",count);
    }else{
        console.log("This is empty string");
    }

}else{
    console.log("This is not string")
}
```
### Q3
### ALGORITHM
### PSEUDOCODE
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrow function</title>
</head>
<body>
   <script>
            let clicked = () =>{
                console.log("You Clicked!!!");
                console.log(this)
            }
            document.addEventListener("click",clicked);
   </script> 
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>classic</title>
</head>
<body>
    <script>
    function clicked(){
        console.log("You Clicked!!!");
        console.log(this)
    }
    document.addEventListener("click",clicked);
    </script>
</body>
</html>
```
### Q4
### ALGORITHM
### PSEUDOCODE
```
for(var i = 0; i <= 10; i++) {
    for(let k=i; k<=i; k++)
    setTimeout(function() {
    console.log(k);
    }, 1000*k);
    }
```    
### Q5
### ALGORITHM
### PSEUDOCODE
```
class book{
    constructor(books,NoofBooks){
    this.books = books;
    this.NoofBooks = NoofBooks;
    }
    Noofbooks(){
      console.log("Total no of books "+ this.NoofBooks);
    }
  }
  const Books = new book('Harry potter',12);//instance
  Books.Noofbooks();

//   console.log(book.Noofbooks); //Static


  class book1{
    
    static Noofbooks(books, NoofBooks){
      return "Total no of books "+ NoofBooks +" " + books;
    }
  }

console.log(book1.Noofbooks("c", 45));
```
### Q6
### ALGORITHM
### PSEUDOCODE
```
class TestClass {
    constructor(myName) {
        this.name = myName;
    }

    updateName() {
        return this.name;
    }
}

TestClass.updateName2 = function() {
    console.log(this.name);
};

var test = new TestClass("Joe");

console.log(test.updateName());

TestClass.updateName2();
```
### Q7
### ALGORITHM
### PSEUDOCODE
```
const ex1 = () => console.log('ex1');
const ex2 = () => console.log('ex2');
const ex = () => {
console.log('ex');
setTimeout(ex1, 1000);
ex2();
}
ex();
```
### Q8
### ALGORITHM
### PSEUDOCODE
```
(function(){
    console.log("this is first");
    setTimeout(() => {
        console.log("this is forth");
        },500);
    console.log("this is second");
    setTimeout(() => {
       console.log("this is fifth"); 
    }, 1000);
    console.log("this is third");
}());
```
### Q9
### ALGORITHM
### PSEUDOCODE
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>custom event</title>
</head>

<body>
    <button style="color: royalblue;" id="buttondemo"> click this</button>

    <script>
        document.getElementById("buttondemo").addEventListener("click",myfunction);

        function myfunction(){
            alert ("custom evenet listner");
        }
    </script>
    
</body>
</html>
```
### Q10
### ALGORITHM
### PSEUDOCODE
```
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
```    
