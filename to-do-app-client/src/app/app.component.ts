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
  currentTask: string = '';
  updatedTask: any;

  taskItems: ToDoItem[] = [
    new ToDoItem('learn how to cook cats', false),
    new ToDoItem('go home', true)
  ]

  showAddDialog() {
    this.visibleAddDialog = true;
  }

  showUpdateDialog(task: any) {
    this.visibleUpdateDialog = true;
    this.currentTask = task;
  }

  addNewToDo() {
    const newToDo = new ToDoItem(this.taskName)
    this.taskItems.push(newToDo);
    this.taskName = '';
    this.visibleAddDialog = false;
  }

  updateTheTask(task: string) {
    const indexOfTask = this.taskItems.findIndex((t) => t.toDoText === this.currentTask);

    if (task == undefined) {
      this.visibleUpdateDialog = false;
      return
    }
    else if (indexOfTask !== -1) {
      this.taskItems[indexOfTask].toDoText = task;
      this.visibleUpdateDialog = false;
    } else {
      console.error('Task not found');
    }
  }


  deleteTheTask(task: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this To-Do?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const indexOfTask = this.taskItems.findIndex((t) => t == task);
        this.taskItems.splice(indexOfTask, 1);
      },
      reject: () => { return }
    });

  }



}
