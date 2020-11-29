import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { BooksFacade, selectBook } from '@nx-ng-ngrx-demo/books';
import { navigate, RouterFacade } from '@nx-ng-ngrx-demo/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookDetailGuard implements CanActivate {

  constructor(private readonly booksFacade: BooksFacade, private readonly routerFacade: RouterFacade) { }

  waitUntilBooksLoaded(): Observable<boolean> {
    return this.booksFacade.booksLoaded$.pipe(
      filter(loaded => loaded),
      take(1)
    );
  }

  hasBookInStore(id: string): Observable<boolean> {
    return this.booksFacade.bookEntities.pipe(
      map(entities => !!entities[id]),
      take(1)
    );
  }

  hasBookInApi(id: string): Observable<boolean> {
    //return this.googleBooks.retrieveBook(id).pipe(
    //map((bookEntity) => BookActions.loadBook({ book: bookEntity })),
    //tap((action) => this.store.dispatch(action)),
    //map((book) => !!book),
    //catchError(() => {
      this.routerFacade.dispatch(navigate({ commands: ['/404'] }));
      return of(false);
    //})
    //);
  }

  hasBook(id: string): Observable<boolean> {
    return this.hasBookInStore(id).pipe(
      switchMap((hasInStore) => {
        if (hasInStore) {
          return of(hasInStore);
        }
        return this.hasBookInApi(id);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params['id'];
    return this.waitUntilBooksLoaded().pipe(
      switchMap(() => this.hasBook(id)),
      tap(hasBook => {
        if (hasBook) {
          this.booksFacade.dispatch(selectBook({ id }));
        }
      })
    );
  }
}
