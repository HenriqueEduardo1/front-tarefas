import { Component } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private popUpService: PopUpService) {}

  addClass() {
    this.popUpService.toggleClass();
  }
}
