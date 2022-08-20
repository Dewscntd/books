import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {WishlistFacade} from './wishlist.facade';
import {StateService} from '../../shared/state/state.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: WishlistFacade, useClass: WishlistFacade},
  ]
})
export class WishlistComponent {
  wishListItems$ = this.wishlistFacade.wishListItems$;

  constructor(private wishlistFacade: WishlistFacade) { }

  deleteFromWishList(id: string): void {
    this.wishlistFacade.deleteFromWishlist(id);
  }
}
