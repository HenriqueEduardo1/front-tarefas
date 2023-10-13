import { Component, Input } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() btnText!: string;

  constructor(public popUpService: PopUpService) {}

  addClass() {
    this.popUpService.toggleClass();
  }
}
