import {Injectable} from '@angular/core';
import {StateService} from '../../shared/state/state.service';
import {Book} from '../../app.types';

@Injectable()
export class BooksFacade {
  bookItems$ = this.state.bookItems$;

  constructor(private state: StateService) {}

  onSearchBooks(event: string): void {
    this.state.searchBooks(event);
  }

  onAddToWishlist(book: Book): void {
    this.state.addToWishlist(book);
  }
}
