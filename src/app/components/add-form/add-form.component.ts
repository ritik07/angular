import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() text: string;
  @Output() day: string;
  @Output() reminder: boolean;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert("Please enter task")
    }

    const payload = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //@emit
    this.onAddTask.emit(payload)
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
