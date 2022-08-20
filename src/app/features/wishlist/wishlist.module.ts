import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WishlistComponent} from './wishlist.component';
import {WishlistRoutingModule} from './wishlist-routing.module';
import { WishlistTableComponent } from './components/wishlist-table/wishlist-table.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzTableModule} from 'ng-zorro-antd/table';
import {LayoutModule} from '../../shared/layout/layout.module';

@NgModule({
  declarations: [WishlistComponent, WishlistTableComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    NzDividerModule,
    NzTableModule,
    LayoutModule
  ]
})
export class WishlistModule { }
