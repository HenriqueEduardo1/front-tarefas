import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PopUpService } from 'src/app/services/pop-up.service';
import {Task} from 'src/app/Task';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() onSubmit = new EventEmitter<Task>();
  @Input() btnText!: string;
  @Input() taskData: Task | null = null; 

  taskForm!: FormGroup;

  constructor(
    public popUpService: PopUpService
  ) {}

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(this.taskData ? this.taskData.idTask : ''),
      title: new FormControl(this.taskData ? this.taskData.title : '', [Validators.required]),
      description: new FormControl(this.taskData ? this.taskData.description : '', [Validators.required]),
      responsible: new FormControl(this.taskData ? this.taskData.responsible : '', [Validators.required]),
      priority: new FormControl(this.taskData ? this.taskData.priority : '', [Validators.required]),
      deadline: new FormControl(this.taskData ? this.taskData.deadline : '', [Validators.required]),
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

  addClass() {
    this.popUpService.toggleClass();
  }

  submit() {
    if(this.taskForm.invalid){
      return;
    }

    this.onSubmit.emit(this.taskForm.value);
    this.addClass();
    this.taskForm.reset();
  }
}
