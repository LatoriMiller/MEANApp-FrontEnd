import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book';
import Book from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  //Declaring the new book Object and initilizing it
  newBook: Book = new Book();

  //An Empty list for the visible book list
  booksList: Book[];
  editBooks: Book[] = [];

  ngOnInit() {
     //At component initialization the 
     this.bookService.getBooks()
     .subscribe(books => {
       //assign the booklist property to the proper http response
       this.booksList = books
       console.log(books)
     })
 }

 create() {
   this.bookService.createBook(this.newBook)
     .subscribe((res) => {
       this.booksList.push(res.data)
       this.newBook = new Book()
     })
 }

 editBook(book: Book) {
   console.log(book)
    if(this.booksList.includes(book)){
     if(!this.editBooks.includes(book)){
       this.editBooks.push(book)
     }else{
       this.editBooks.splice(this.editBooks.indexOf(book), 1)
       this.bookService.editBook(book).subscribe(res => {
         console.log('Update Succesful')
        }, err => {
           this.editBook(book)
           console.error('Update Unsuccesful')
         })
       }
     }
   }

   submitBook(event, book:Book){
     if(event.keyCode ==13){
       this.editBook(book)
     }
   }

   deleteBook(book: Book) {
     this.bookService.deleteBook(book._id).subscribe(res => {
       this.booksList.splice(this.booksList.indexOf(book), 1);
     })
   }
}







