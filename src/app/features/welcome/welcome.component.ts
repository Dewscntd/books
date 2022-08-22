import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
  constructor(
    private router: Router
  ) {
  }
  form = new FormGroup({
    user: new FormControl(undefined, [Validators.required])
  });

  updateLoggedInUser(): void {
    window.localStorage.setItem('loggedInUser', this.form?.value?.user);
    this.router.navigate(['/books']);
  }
}
