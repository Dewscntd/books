import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {Book, VolumeInfo} from '../../../../app.types';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsDialogComponent {
  @Input() book: Book;
}
