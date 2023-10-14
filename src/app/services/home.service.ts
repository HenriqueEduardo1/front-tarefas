import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private situationObservable = new BehaviorSubject<string>('em andamento');
  situation = this.situationObservable.asObservable();

  updateSituation(newValue: string) {
    this.situationObservable.next(newValue);
  }
}
