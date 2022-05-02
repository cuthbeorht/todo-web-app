import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Todo} from "../models/Todo";

export type GetTodoResponse  = {
  todos: Todo[];
}

@Injectable({providedIn: 'root'})
export class TodoApi {
  constructor(private httpClient: HttpClient) {
  }

  fetchTodoItems(): Observable<GetTodoResponse> {
    return this.httpClient.get<GetTodoResponse>('http://localhost:8000/todos');
  }

}
