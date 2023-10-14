import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  private buttonClickSubject = new Subject<void>();

  evento = new EventEmitter();

  btnClickReload = this.buttonClickSubject.asObservable();
  
  emitBtnClickReload() {
    this.buttonClickSubject.next();
  }

}
