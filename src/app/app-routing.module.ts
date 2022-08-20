import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationGuard} from './shared/authentication.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { path: 'books',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./features/books/books.module').then(m => m.BooksModule)
  },
  { path: 'wishlist',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./features/wishlist/wishlist.module').then(m => m.WishlistModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
