import {Observable, Subject} from 'rxjs';
import {OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';

export type Obj<T = any> = {
  [key: string]: T;
};
export declare type Constructor<T> = new (...args: any[]) => T;

export const UntilDestroyed = UntilDestroyedMixin(class {});
// tslint:disable-next-line:typedef
export function UntilDestroyedMixin<C extends Obj>(Base: Constructor<C>) {
  return class extends (Base as any) implements OnDestroy {
    destroyed$ = new Subject();

    constructor(...args: any) {
      super(...args);
    }

    ngOnDestroy(): void {
      this.destroyed$.next('');
      this.destroyed$.complete();
    }

    subscribe<T>(obs: Observable<T>, cb: (r: T) => void): void {
      obs.pipe(takeUntil(this.destroyed$)).subscribe(cb);
    }
  };
}
