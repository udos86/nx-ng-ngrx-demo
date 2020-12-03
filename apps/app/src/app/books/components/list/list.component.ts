import { Component } from '@angular/core';
import { BooksFacade } from '@nx-ng-ngrx-demo/books';

export interface TableColumn {
  title: string;
  property: string;
}

const columns: TableColumn[] = [
  {
    title: 'Id',
    property: 'id'
  },
  {
    title: 'Title',
    property: 'title'
  },
  {
    title: 'Author',
    property: 'author'
  }
];

@Component({
  selector: 'books-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent{
  books$ = this.booksFacade.allBooks$;

  constructor(private readonly booksFacade: BooksFacade) {
  }

  get columns() {
    return columns;
  }

  get columnIds(): string[] {
    return columns.map(column => column.title);
  }
}
