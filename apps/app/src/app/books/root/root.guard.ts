import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { BooksFacade, loadBooks } from '@nx-ng-ngrx-demo/books';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksRootGuard implements CanActivate {

  /* Data fetching on guarded router navigation 
  |--------------------------------------------------
  |+ uses Angular router core mechanism
  |+ pulls data fetching logic out of component
  |+ considers initial deep url call 
  |- partly breaks pure NgRx architecture by not using effect
  |
  */

  constructor(private readonly booksFacade: BooksFacade) { }

  canActivate(_route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.booksFacade.booksLoaded$.pipe(
      map(loaded => {
        if (!loaded) {
          this.booksFacade.dispatch(loadBooks());
        }
        return true;
      })
    );
  }
}
