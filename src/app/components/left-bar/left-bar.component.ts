import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
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
    private homeService: HomeService
  ) {}

  toggleButton(buttonNumber: number) {
    this.currentButton = buttonNumber;
  }

  clickedBtnMenuP() {
    this.homeService.updateSituation('em andamento');
  }

  clickedBtnMenuS() {
    this.homeService.updateSituation('concluida')
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
