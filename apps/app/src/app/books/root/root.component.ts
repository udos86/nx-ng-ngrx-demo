import { Component, OnInit } from '@angular/core';
import { BooksFacade, loadBooks } from '@nx-ng-ngrx-demo/books';

@Component({
  selector: 'books-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {

  constructor(private readonly booksFacade: BooksFacade) {
  }

  ngOnInit() {
    //this.booksFacade.dispatch(loadBooks());
  }
}
