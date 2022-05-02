import { Component, OnInit } from '@angular/core';
import {TodoApi} from "../common/apis/TodoApi";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItems: any[] = [];

  constructor(private todoApi: TodoApi) { }

  ngOnInit(): void {

    this.todoApi.fetchTodoItems().subscribe((items) => {
      this.todoItems = items.todos;
    });
  }



}
