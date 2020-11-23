# NxNgNgrxDemo

* `ng g @nrwl/angular:lib books`
* `ng g @nrwl/angular:ngrx books --module=libs/books/src/lib/books.module.ts --directory store/books --defaults --facade`
* Rename `BooksEntity` to `Book`
* Rename `BOOKS_FEATURE_KEY` to `booksFeatureKey` 
* `ng generate @ngrx/schematics:entity Book --project books --module books.module.ts --flat false`
* Copy generated entitity actions
* Copy generated reducer functions
* Rename `booksAdapter` to `adapter`
* Reformat misgenerated lines of code
* Delete `book` folder
