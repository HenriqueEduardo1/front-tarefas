import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  private buttonClickSubject = new Subject<void>();

  btnClickReload = this.buttonClickSubject.asObservable();

  btnClickProgressTasks = this.buttonClickSubject.asObservable();
  btnClickCompletedTasks = this.buttonClickSubject.asObservable();

  emitBtnClickReload() {
    this.buttonClickSubject.next();
  }

  emitBtnClickProgressTasks() {
    this.buttonClickSubject.next();
  }

  emitBtnClickCompletedTasks() {
    this.buttonClickSubject.next();
  }
}
