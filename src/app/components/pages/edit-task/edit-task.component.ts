import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { ButtonsService } from 'src/app/services/buttons.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  task!: Task;
  data!: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private buttonsService: ButtonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.taskService.getTaskById(id).subscribe((i) => {
      this.task = i;
    });
  }

  reloadTasks() {
    this.buttonsService.emitBtnClickReload();
  }

  async updateHandler(task: Task) {
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
        console.log('Task editado com sucesso', resposta);
        this.reloadTasks();
      },
      (erro) => {
        console.error('Erro ao salvar task', erro);
      }
    );
    this.router.navigate(['/']);
  }
}
