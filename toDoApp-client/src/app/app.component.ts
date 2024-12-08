import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoApp-client';
  taskName : string = '';
  tasks : string[] = []

  addNewToDo(){
    this.tasks.push(this.taskName)
    this.taskName = ''
    console.log(this.tasks)
  }

  


}
