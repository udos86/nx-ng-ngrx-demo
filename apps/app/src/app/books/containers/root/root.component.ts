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
  /* Data fetching on parent component initialization 
  |--------------------------------------------------
  |+ easy and obivous approach
  |- puts data fetching logic into component
  |- does not consider initial deep url call from the outside and nested routes protected by guards
  |

    this.booksFacade.dispatch(loadBooks());
  */
  }
}
