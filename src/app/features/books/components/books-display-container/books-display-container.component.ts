import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Book, VolumeInfo} from '../../../../app.types';

@Component({
  selector: 'app-books-display-container',
  templateUrl: './books-display-container.component.html',
  styleUrls: ['./books-display-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksDisplayContainerComponent {
  @Input() books: Book[];

  @Output() wishlistAdded = new EventEmitter<Book>();

  addWishlist(book: Book): void {
    this.wishlistAdded.emit(book);
  }
}
