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

  data!: any;

  constructor(
    private buttonsService: ButtonsService,
    private taskService: TaskService,
    private popUpService: PopUpService
  ) {}

  addClassFormUpdate() {
    this.popUpService.toggleClassFormUpdate();
  }
  
  get taskColor(): string {
    switch (this.task.priority) {
      case 'alta':
        return '#FFB3B3';
      case 'media':
        return '#FFFFB3';
      case 'baixa':
        return '#B3FFB3';
      default:
        return '#E0E0E0';
    }
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

  async updateSituationTaskHandler(id: any){

    this.data = {
      "situation": "concluida"
    }

    await this.taskService.updateSituationTask(id, this.data).subscribe(
      (resposta) => {
        console.log('Task concluida com sucesso', resposta);
        this.buttonsService.emitBtnClickReload();
      },
      (erro) => {
        console.error('Erro ao concluir task', erro);
      }
    );
  }
}
