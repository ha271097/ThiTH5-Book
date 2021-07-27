import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookListComponent} from './book-list/book-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BookAddComponent} from './book-add/book-add.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {BookDeleteComponent} from './book-delete/book-delete.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  },
  {
    path: 'create',
    component: BookAddComponent
  },
  {
    path: 'books/:id/edit',
    component: BookAddComponent
  },
  {
    path: 'books/:id/delete',
    component: BookDeleteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookListComponent,

    BookAddComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
