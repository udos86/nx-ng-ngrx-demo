import { Component, OnInit } from '@angular/core';
import { Book, BooksFacade, loadBooks } from '@nx-ng-ngrx-demo/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-ng-ngrx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books$ = this.booksFacade.allBooks$;

  constructor(private readonly booksFacade: BooksFacade) {
  }

  ngOnInit() {
    this.booksFacade.dispatch(loadBooks());
  }
}
