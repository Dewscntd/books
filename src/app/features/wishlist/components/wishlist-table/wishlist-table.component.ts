import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../../../app.types';

@Component({
  selector: 'app-wishlist-table',
  templateUrl: './wishlist-table.component.html',
  styleUrls: ['./wishlist-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistTableComponent {
  @Input() books: Book[];

  @Output() deleteFromWishList = new EventEmitter<string>();

  onDeleteFromWishList(bookId): void {
    this.deleteFromWishList.emit(bookId);
  }
}
