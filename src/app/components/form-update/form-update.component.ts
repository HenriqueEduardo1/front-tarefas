import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Task} from 'src/app/Task';

import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent {
  @Output() onSubmit = new EventEmitter<Task>();
  @Input() taskData!: Task; 

  taskForm!: FormGroup;

  constructor(
  ) {}

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(this.taskData.idTask),
      title: new FormControl(this.taskData.title, [Validators.required]),
      description: new FormControl(this.taskData.description, [Validators.required]),
      responsible: new FormControl(this.taskData.responsible, [Validators.required]),
      priority: new FormControl(this.taskData.priority, [Validators.required]),
      deadline: new FormControl(this.taskData.deadline, [Validators.required]),
    });
  }

  get title(){
    return this.taskForm.get('title')!;
  }

  get description(){
    return this.taskForm.get('description')!;
  }

  get responsible(){
    return this.taskForm.get('responsible')!;
  }

  get priority(){
    return this.taskForm.get('priority')!;
  }

  get deadline(){
    return this.taskForm.get('deadline')!;
  }

  submit() {
    if(this.taskForm.invalid){
      return;
    }

    this.onSubmit.emit(this.taskForm.value);
    this.taskForm.reset();
  }
}
