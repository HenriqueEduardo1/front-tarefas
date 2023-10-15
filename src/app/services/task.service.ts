import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://gerenciador-de-tarefas-qb7g.onrender.com/task'

  constructor( private http: HttpClient ) { }

  creatTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  getAllTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskById(id: any): Observable<Task>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Task>(url);
  }

  deleteTask(id: any){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url);
  }

  updateTask(id: any, task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Task>(url, task);
  }

  updateSituationTask(id: any, situation: any){
    const url = `${this.apiUrl}/${id}`
    return this.http.patch(url, situation);
  }
}
