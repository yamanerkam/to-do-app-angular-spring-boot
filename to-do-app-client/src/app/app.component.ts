import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Dialog } from 'primeng/dialog';


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
    console.log()
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
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
