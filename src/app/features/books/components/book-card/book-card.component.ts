import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {BookDetailsDialogComponent} from '../book-details-dialog/book-details-dialog.component';
import {Book } from '../../../../app.types';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  providers: [
    {
      provide: NzModalService, useClass: NzModalService
    }
  ]
})
export class BookCardComponent  {
  @Input() book: Book;

  @Output() wishlistAdded = new EventEmitter<Book>();

  constructor(private modal: NzModalService) {}

  bookClicked(): void {
    const modal = this.modal.create({
      nzWidth: '720px',
      nzContent: BookDetailsDialogComponent,
      nzComponentParams: {book: this.book},
      nzFooter: [
        {
          label: 'ok',
          onClick: (contentComponentInstance) => (modal.close())
        },
        {
          label: 'Wishlist',
          onClick: contentComponentInstance => {
            this.wishlistAdded.emit(contentComponentInstance.book);
            modal.close();
          }
        }
      ]
    });
  }
}
