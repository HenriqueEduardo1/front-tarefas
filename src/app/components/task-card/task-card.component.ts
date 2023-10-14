import { Component, Input } from '@angular/core';
import { ButtonsService } from '../../services/buttons.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;

  constructor(
    private buttonsService: ButtonsService,
    private taskService: TaskService
  ) {}

    clickedDelete(){
      this.buttonsService.evento.emit();
    }

  async removeHandler(id: any){
    await this.taskService.deleteTask(id).subscribe();
  }
}
