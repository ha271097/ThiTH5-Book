import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../models/book';
import {BookService} from '../serivce/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book = {};

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      const id: number = param.id;
      console.log(param);
      console.log(id);
      this.bookService.getById(id).subscribe(book => {
        this.book = book;
      });
    });
  }

}
