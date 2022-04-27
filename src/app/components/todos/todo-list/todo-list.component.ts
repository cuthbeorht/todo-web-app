import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItems: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.fetchTodoItems().subscribe((items) => {
      this.todoItems = items.todos;
    });
  }

  fetchTodoItems(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/todos');
  }

}
