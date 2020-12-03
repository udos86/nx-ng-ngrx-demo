import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { BookDetailGuard } from './guards/detail.guard';
import { BooksRootGuard } from './guards/root.guard';
import { RootComponent } from './containers/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    canActivate: [BooksRootGuard],
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        canActivate: [BookDetailGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
