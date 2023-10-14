import { Component, Input } from '@angular/core';
import { ButtonsService } from '../../services/buttons.service';
import { TaskService } from 'src/app/services/task.service';
import { PopUpService } from 'src/app/services/pop-up.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;

  btnText = "Editar"

  data!: Task;

  constructor(
    private buttonsService: ButtonsService,
    private taskService: TaskService,
    private popUpService: PopUpService
  ) {}

  addClass() {
    this.popUpService.toggleClass();
  }
  

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

  async editHandler(task: Task){
    const id = this.task.idTask;

    this.data = {
      "title": `${task.title}`,
      "description": `${task.description}`,
      "priority": `${task.priority}`,
      "situation": "em andamento",
      "responsible": `${task.responsible}`,
      "deadline": `${task.deadline}`,
    }

    await this.taskService.updateTask(id, this.data).subscribe(
      (resposta) => {
        console.log('Task editada com sucesso', resposta);
        this.buttonsService.emitBtnClickReload();
      },
      (erro) => {
        console.error('Erro ao editar task', erro);
      }
    );
  }
}
