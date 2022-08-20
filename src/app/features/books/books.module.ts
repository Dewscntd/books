import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {BooksRoutingModule} from './books-routing.module';
import {BooksComponent} from './books.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BookCardComponent } from './components/book-card/book-card.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import { BookDetailsDialogComponent } from './components/book-details-dialog/book-details-dialog.component';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import { BooksDisplayContainerComponent } from './components/books-display-container/books-display-container.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {LayoutModule} from '../../shared/layout/layout.module';

const ANT = [
  NzInputModule,
  NzIconModule,
  NzCardModule,
  NzAvatarModule,
  NzDescriptionsModule,
  NzDividerModule,
  NzGridModule,
  NzModalModule,
  NzButtonModule
];

@NgModule({
  declarations: [BooksComponent, SearchComponent, BookCardComponent, BookDetailsDialogComponent, BooksDisplayContainerComponent],
  imports: [
    BooksRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ...ANT,
    LayoutModule
  ],
  exports: [BookCardComponent, BooksDisplayContainerComponent]
})
export class BooksModule { }
