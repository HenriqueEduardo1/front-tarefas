import { Component } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up.service';
import { ButtonsService } from 'src/app/services/buttons.service';
import { TaskService } from 'src/app/services/task.service';
import { HomeService } from 'src/app/services/home.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allTasks: Task[] = [];
  filterTasksA: Task[] = [];
  filterTasksM: Task[] = [];
  filterTasksB: Task[] = [];
  allTaskFilter: Task[] = [];

  TDBusca: string = '';
  PBusca: string = '';
  RBusca: string = '';

  situation!: string;

  constructor(
    private popUpService: PopUpService,
    private taskService: TaskService,
    private buttonsService: ButtonsService,
    private homeService: HomeService
  ) {
    this.buttonsService.evento.subscribe(() => {
      this.reloadList();
    });
  }

  reloadList(): void {
    this.taskService.getAllTasks().subscribe((items) => {
      this.allTasks = items;
      this.filterTasksA = items.filter((i) => (i.situation === this.situation && i.priority === 'alta'));
      this.filterTasksM = items.filter((i) => (i.situation === this.situation && i.priority === 'media'));
      this.filterTasksB = items.filter((i) => (i.situation === this.situation && i.priority === 'baixa'));
    })
  }

  ngOnInit(): void {
    this.homeService.situation.subscribe((valor) => {
      this.situation = valor;
      this.reloadList();
    });

    this.taskService.getAllTasks().subscribe((items) => {
      this.allTasks = items;
      this.filterTasksA = items.filter((i) => (i.situation === this.situation && i.priority === 'alta'));
      this.filterTasksM = items.filter((i) => (i.situation === this.situation && i.priority === 'media'));
      this.filterTasksB = items.filter((i) => (i.situation === this.situation && i.priority === 'baixa'));
    });

    this.buttonsService.btnClickReload.subscribe(() => {
      this.reloadList();
    });
    
  }

  addClass() {
    this.popUpService.toggleClass();
  }

  clearBusca(): void{
    this.filterTasksA = this.allTasks.filter((i) => (i.situation === this.situation && i.priority === 'alta'));
    this.filterTasksM = this.allTasks.filter((i) => (i.situation === this.situation && i.priority === 'media'));
    this.filterTasksB = this.allTasks.filter((i) => (i.situation === this.situation && i.priority === 'baixa'));
  }

  filter(): void{
    this.allTaskFilter = this.allTasks.filter(t => {return this.aplicationFilter(t);});
    this.filterTasksA = this.allTaskFilter.filter((i) => (i.situation === this.situation && i.priority === 'alta'));
    this.filterTasksM = this.allTaskFilter.filter((i) => (i.situation === this.situation && i.priority === 'media'));
    this.filterTasksB = this.allTaskFilter.filter((i) => (i.situation === this.situation && i.priority === 'baixa'));
  }

  aplicationFilter(task: Task): boolean{
    if(this.TDBusca === '' && this.RBusca === '' && this.PBusca !== ''){
      return (task.priority == this.PBusca);
    }
    if(this.TDBusca === '' && this.RBusca !== '' && this.PBusca === ''){
      return (task.responsible == this.RBusca);
    }
    if(this.TDBusca !== '' && this.RBusca === '' && this.PBusca === ''){
      return (
        task.title.toLowerCase().includes(this.TDBusca.toLowerCase()) ||
        task.description.toLowerCase().includes(this.TDBusca.toLowerCase())
      );
    }
    if(this.TDBusca !== '' && this.RBusca !== '' && this.PBusca === ''){
      return (
        task.responsible == this.RBusca &&
        (
          task.title.toLowerCase().includes(this.TDBusca.toLowerCase()) ||
          task.description.toLowerCase().includes(this.TDBusca.toLowerCase())
        )
      );
    }
    if(this.TDBusca !== '' && this.RBusca === '' && this.PBusca !== ''){
      return (
        task.priority == this.PBusca &&
        (
          task.title.toLowerCase().includes(this.TDBusca.toLowerCase()) ||
          task.description.toLowerCase().includes(this.TDBusca.toLowerCase())
        )
      );
    }
    if(this.TDBusca === '' && this.RBusca !== '' && this.PBusca !== ''){
      return (
        (task.responsible == this.RBusca) && (task.priority == this.PBusca)
      );
    }
    if(this.TDBusca !== '' && this.RBusca !== '' && this.PBusca !== ''){
      return (
        task.priority == this.PBusca &&
        task.responsible == this.RBusca &&
        (
          task.title.toLowerCase().includes(this.TDBusca.toLowerCase()) ||
          task.description.toLowerCase().includes(this.TDBusca.toLowerCase())
        )
      );
    }
    return true;
  }
}
