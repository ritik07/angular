import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Task } from '../Task'

const headerOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5000/task'

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTaskById(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(deleteUrl)
  }

  updateTaskById(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(deleteUrl, task, headerOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, headerOptions)
  }
}
