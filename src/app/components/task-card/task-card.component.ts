import { Component, Input } from '@angular/core';
import { ButtonsService } from '../../services/buttons.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;

  constructor(
    private buttonsService: ButtonsService
  ) {}

  onBtnClicked() {
    this.buttonsService.emitBtnClickReload();
  }
}
