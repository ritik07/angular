import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { UiService } from '../../services/ui.service'
import { Task } from '../../Task'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []
  showForm: boolean = false
  subscription: Subscription

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.uiService.onToggle().subscribe((response) => this.showForm = response)
  }

  ngOnInit(): void {
    this.getListing()
  }

  getListing() {
    this.taskService.getTask().subscribe((response) => {
      this.tasks = response
    })
  }

  deleteTask(task) {
    this.taskService.deleteTaskById(task).subscribe(() => {
      this.getListing()
      // this.tasks = this.tasks.filter((item) => item.id !== task.id)
    })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskById(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => {
      this.getListing()
    })
  }

}
