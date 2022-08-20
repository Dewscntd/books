import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UntilDestroyed} from '../../../../shared/utils/until-destroyed';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent extends UntilDestroyed implements OnInit {
  form = new FormGroup({
    search: new FormControl()
    }
  );

  @Output() searchEmitter = new EventEmitter();

  ngOnInit(): void {
    this.subscribe(this.form.valueChanges.pipe(debounceTime(400), distinctUntilChanged()), (search) => {
      this.searchEmitter.emit(search);
    });
  }
}
