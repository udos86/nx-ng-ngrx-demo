import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { BooksRoutingModule } from './books-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { RootComponent } from './containers/root/root.component';

@NgModule({
  declarations: [
    DetailComponent,
    ListComponent,
    RootComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
