import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoProject';

  taskItems: string[] = ['orange', 'kiwi', 'banana'];
  newTask!: string;
  editIndex: number = -999;
  desiredButtonName: string = "Add Task";

  
  // addItem(newitem: string) {
  //   this.list = [ ... this.list, newitem] ;
  // }

  addToList() {
    // alert(this.editIndex);
    if(this.editIndex == -999 && this.newTask.trim()!='') {
      //this.taskItems = [...this.taskItems, this.newTask];
      this.newTask === 'apple' || this.taskItems.length >= 5 ? this.taskItems :
        this.taskItems.push(this.newTask) && this.taskItems;
    } else {
      this.taskItems[this.editIndex] = this.newTask;
      this.editIndex = -999;
    }

  }

  public editTask(index: number) {
    this.desiredButtonName = "Edit Task";
    this.newTask = this.taskItems[index];
    this.editIndex = index;
  }

  public deleteTask(index: number) {
    this.taskItems.splice(index, 1);
  } 

}
