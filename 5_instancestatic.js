'use strict'
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

console.log(book1.Noofbooks("c", 45)); //Static
