import { Observable } from "rxjs";
import { Todo } from "../model/todo.model";

export interface ITodoService {
  getAll(): Observable<Todo[]>;
  save(todo: Todo): Observable<void>;
  get(id: number): Observable<Todo>;
  remove(id: number): Observable<void>;
  toggle(todo: Todo): Observable<void>;
}
