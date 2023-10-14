import { Component } from '@angular/core';
@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent {
  isMenuActive: boolean = false; 
  enableButton: boolean = true;  
  disableButton: boolean = false; 

  currentButton: number = 1;


  toggleButton(buttonNumber: number) {
    this.currentButton = buttonNumber;
  }

  enableMenu() {
    this.isMenuActive = true;
    this.enableButton = false;
    this.disableButton = true;
  }

  disableMenu() {
    this.isMenuActive = false;
    this.enableButton = true;
    this.disableButton = false;
  }
}
