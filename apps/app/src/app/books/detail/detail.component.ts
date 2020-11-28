import { Component } from '@angular/core';
import { Book, BooksFacade } from '@nx-ng-ngrx-demo/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'books-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {

  book$: Observable<Book> = this.booksFacade.selectedBook$;

  constructor(private readonly booksFacade: BooksFacade) {
  }
}
