import { Component } from '@angular/core';
import { ButtonsService } from '../../services/buttons.service';

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

  constructor(
    private buttonsService: ButtonsService,
  ) {}

  toggleButton(buttonNumber: number) {
    this.currentButton = buttonNumber;
  }

  emitClickButton() {
    this.buttonsService.emitBtnClickReload();
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
