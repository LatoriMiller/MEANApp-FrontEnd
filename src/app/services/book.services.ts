import Book from '../models/book.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class BookService {

  api_url = 'http://localhost:3000';
  bookUrl = `${this.api_url}/api/books`;

  constructor(private http: HttpClient) {}
//Builds the raw CRUD functionality to the model
//Create book, takes a Book Object (similar to the autowired in STS)

createBook(book: Book): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.bookUrl}`, book);
  }
getBooks(): Observable<Book[]>{
    return this.http.get(this.bookUrl)
    .pipe(map(res  => {
        //Maps the response object sent from the server
        //pipe the output of the first function to this success function
        return res["data"].docs as Book[];
    }))
}
editBook(book:Book){
    let editUrl = `${this.bookUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, book);
}
deleteBook(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.bookUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
        return res;
    }))
}
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
}

}