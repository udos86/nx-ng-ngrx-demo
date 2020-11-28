import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http404Component } from './404.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(module => module.BooksModule)
  },
  {
    path: '404',
    component: Http404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
