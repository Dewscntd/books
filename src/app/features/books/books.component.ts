import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BooksFacade} from './books.facade';
import {Book, VolumeInfo} from '../../app.types';
import {StateService} from '../../shared/state/state.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: BooksFacade, useClass: BooksFacade},
  ]
})
export class BooksComponent  {
  bookItems$ = this.booksFacade.bookItems$ as any;

  constructor(private booksFacade: BooksFacade) { }

  onSearch(event: string): void {
    this.booksFacade.onSearchBooks(event);
  }

  addToWishlist(book: Book): void {
    this.booksFacade.onAddToWishlist(book);
  }
}
