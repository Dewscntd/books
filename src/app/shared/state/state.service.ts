import {pluck} from 'rxjs/operators';
import {StoreService} from './store.service';
import {ApiService} from '../services/api.service';
import {AppState, Book, VolumeInfo} from '../../app.types';
import {Injectable} from '@angular/core';

const initialState: AppState = {
  wishlist: [],
  bookItems: [],
  fetchingBooks: false
};

@Injectable({
  providedIn: 'root'
})
export class StateService extends StoreService<AppState>{
  bookItems$ = this.select((state) => state.bookItems);
  wishlist$ = this.select((state) => state.wishlist);

  constructor(private api: ApiService) {
    super(initialState);
  }

  searchBooks(searchTerm: string): void {
    this.api.searchForBooks(searchTerm)
      .pipe(pluck('items'))
      .subscribe((items) => (this.setState({bookItems: items})));
  }

  addToWishlist(book: Book): void {
    this.setState({wishlist: [...this.state.wishlist, book]});
  }

  deleteFromWishlist(id): void {
    this.setState({wishlist: [...this.state.wishlist.filter((book) => book.id !== id)]});
  }
}
