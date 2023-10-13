import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  public addClass: boolean = true;

  toggleClass() {
    this.addClass = !this.addClass;
  }
}
