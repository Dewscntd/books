import {Injectable} from '@angular/core';
import {StateService} from '../../shared/state/state.service';

@Injectable()
export class WishlistFacade {
  wishListItems$ = this.state.wishlist$;

  constructor(private state: StateService) {}

  deleteFromWishlist(id: string): void {
    this.state.deleteFromWishlist(id);
  }
}
