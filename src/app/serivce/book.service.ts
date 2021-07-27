import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book';
const API_URL = 'http://localhost:3000/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {
   

  constructor(private httpClient: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL);
  }

  getById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(API_URL+'/'+id);
  }

  addOneBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book);
  }

  updateOneBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(API_URL+'/'+book.id, book);
  }

  deleteOneBook(id: number): Observable<any> {
    return this.httpClient.delete(API_URL+'/'+id);
  }
}
