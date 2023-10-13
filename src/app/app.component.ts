import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefas';

  data!: Task;

  btnText = "Cadastrar"

  constructor(
    private taskService: TaskService
  ) {}

  async createHandler(task: Task) {
    this.data = {
      "title": `${task.title}`,
      "description": `${task.description}`,
      "priority": `${task.priority}`,
      "situation": "em andamento",
      "responsible": `${task.responsible}`,
      "deadline": `${task.deadline}`,
    }
    
    await this.taskService.creatTask(this.data).subscribe();
  }

}
