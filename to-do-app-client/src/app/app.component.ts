import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'toDoApp-client';
  taskName: string = '';
  tasks: string[] = ['a', 'u']
  updateInput: boolean = false;

  addNewToDo() {
    this.tasks.push(this.taskName)
    this.taskName = ''
  }

  updateTheTask(task: any) {
    // update dialogue will be added here
    const indexOfTask = this.tasks.findIndex((t) => t == task);
    this.tasks[indexOfTask] = ''
  }

  deleteTheTask(task: any) {
    // confirmation dialogue will be added here
    const indexOfTask = this.tasks.findIndex((t) => t == task);
    this.tasks.splice(indexOfTask, 1);
  }



}
