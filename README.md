# NxNgNgrxDemo

## Feature State Library

* `ng g @nrwl/angular:lib books`
* `ng g @nrwl/angular:ngrx books --module=libs/books/src/lib/books.module.ts --directory store/books --defaults --facade`
* rename `BooksEntity` to `Book`
* rename `BOOKS_FEATURE_KEY` to `booksFeatureKey` 
* `ng generate @ngrx/schematics:entity Book --project books --module books.module.ts --flat false`
* copy generated entitity actions
* copy generated reducer functions
* rename `booksAdapter` to `adapter`
* reformat all misgenerated lines of code
* delete `book` folder

## App State

* `ng g @nrwl/angular:ngrx app --module=apps/app/src/app/app.module.ts --root`
* import `BooksModule`
