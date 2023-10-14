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

  async removeHandler(id: any){
    await this.taskService.deleteTask(id).subscribe(
      () => {
        console.log('Task deletada com sucesso');
        this.buttonsService.emitBtnClickReload();
      },
      (erro) => {
        console.error('Erro ao deletar task', erro);
      }
    );
  }
}
