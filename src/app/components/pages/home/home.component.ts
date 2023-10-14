import { Component } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up.service';
import { ButtonsService } from 'src/app/services/buttons.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tasksA: Task[] = [];
  tasksM: Task[] = [];
  tasksB: Task[] = [];
  allTasks: Task[] = [];

  situation = 'em andamento'

  constructor(
    private popUpService: PopUpService,
    private taskService: TaskService,
    private buttonsService: ButtonsService
  ) {
    this.buttonsService.evento.subscribe(() => {
      this.reloadList();
    });
  }

  reloadList(): void {
    this.taskService.getAllTasks().subscribe((items) => {
      this.tasksA = items.filter(task => task.priority === 'alta');
      this.tasksM = items.filter(task => task.priority === 'media');
      this.tasksB = items.filter(task => task.priority === 'baixa');
      this.allTasks = items;
    })
  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((items) => {
      this.tasksA = items.filter(task => task.priority === 'alta');
      this.tasksM = items.filter(task => task.priority === 'media');
      this.tasksB = items.filter(task => task.priority === 'baixa');
      this.allTasks = items;
    });

    this.buttonsService.btnClickReload.subscribe(() => {
      this.reloadList();
    });
  }

  addClass() {
    this.popUpService.toggleClass();
  }
}
