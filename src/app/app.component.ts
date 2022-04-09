import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todoItems: any[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getTodoItems().subscribe((items) => {
      this.todoItems = items.todos;
    });


  }

  getTodoItems(): Observable<any> {
    console.log('Getting Todo items');
    return this.httpClient.get('http://localhost:8000/todos');
  }
}
