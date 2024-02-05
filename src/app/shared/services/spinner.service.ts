import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  statusSpinner: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  show(): void {
    this.statusSpinner.next(true);
  }
  hide(): void {
    this.statusSpinner.next(false);
  }
}
