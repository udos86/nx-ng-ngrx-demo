import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { BooksRoutingModule } from './books-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RootComponent } from './root/root.component';

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
