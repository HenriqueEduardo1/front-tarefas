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
  ) {}

  reloadList(): void {
    this.taskService.getAllTasks().subscribe((items) => {
      this.tasksA = items.filter(task => task.priority === 'alta');
      this.tasksM = items.filter(task => task.priority === 'media');
      this.tasksB = items.filter(task => task.priority === 'baixa');
      this.allTasks = items;
    })
  }

  reloadProgressTasks(): void {
    this.tasksA = this.allTasks.filter(task => (task.priority === 'alta' && task.situation === 'em andamento'));
    this.tasksM = this.allTasks.filter(task => (task.priority === 'media' && task.situation === 'em andamento'));
    this.tasksB = this.allTasks.filter(task => (task.priority === 'baixa' && task.situation === 'em andamento'));
  }

  reloadCompletedTasks(): void {
    this.tasksA = this.allTasks.filter(task => (task.priority === 'alta' && task.situation === 'concluida'));
    this.tasksM = this.allTasks.filter(task => (task.priority === 'media' && task.situation === 'concluida'));
    this.tasksB = this.allTasks.filter(task => (task.priority === 'baixa' && task.situation === 'concluida'));
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

    this.buttonsService.btnClickProgressTasks.subscribe(() => {
      this.reloadProgressTasks();
    })

    this.buttonsService.btnClickCompletedTasks.subscribe(() => {
      this.reloadCompletedTasks();
    })
  }

  addClass() {
    this.popUpService.toggleClass();
  }
}
