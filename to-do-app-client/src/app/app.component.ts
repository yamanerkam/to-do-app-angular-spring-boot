import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Dialog } from 'primeng/dialog';
import { ToDoItem } from '../shared/models/toDoItem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, ButtonModule, InputTextModule, ConfirmDialog, Dialog],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  providers: [ConfirmationService]
})
export class AppComponent {

  constructor(private confirmationService: ConfirmationService) { }

  title = 'toDoApp-client';
  taskName: string = '';
  tasks: string[] = ['a', 'u']
  updateInput: boolean = false;
  visibleAddDialog: boolean = false;
  visibleUpdateDialog: boolean = false;
  currentTask: any;
  updatedTask: any;

  taskItems = [
    new ToDoItem('learn how to cook cats', true)
  ]

  showAddDialog() {
    this.visibleAddDialog = true;
  }

  showUpdateDialog(task: any) {
    this.visibleUpdateDialog = true;
    this.currentTask = task;
  }

  addNewToDo() {
    this.tasks.push(this.taskName);
    this.taskName = '';
    this.visibleAddDialog = false;
  }

  updateTheTask(task: any, newTask: any) {
    const indexOfTask = this.tasks.findIndex((t) => t == task);
    this.tasks[indexOfTask] = this.updatedTask
    this.visibleUpdateDialog = false
  }

  deleteTheTask(task: any) {
    console.log()
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this To-Do?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const indexOfTask = this.tasks.findIndex((t) => t == task);
        this.tasks.splice(indexOfTask, 1);
      },
      reject: () => { return }
    });

  }



}
