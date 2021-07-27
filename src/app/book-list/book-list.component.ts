import {Component, OnInit} from '@angular/core';
import {Book} from '../models/book';
import {BookService} from '../serivce/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data => {
      console.log(data);
      this.bookList = data;
    });
  }

}
