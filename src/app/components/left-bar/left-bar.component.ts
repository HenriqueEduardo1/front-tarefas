import { Component } from '@angular/core';
import { ButtonsService } from 'src/app/services/buttons.service';
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
    private buttonsService: ButtonsService
  ) {}

  onBtnClickedProgress() {
    this.buttonsService.emitBtnClickProgressTasks();
  }

  onBtnClickedCompleted() {
    this.buttonsService.emitBtnClickCompletedTasks();
  }

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
