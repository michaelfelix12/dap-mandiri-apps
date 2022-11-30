import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api-response.mode';
import { TODO, Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // private todos: Todo[] = [];
  // private storage: Storage = sessionStorage;

  constructor(private readonly http: HttpClient) {}
  private baseUrl: string = 'api/v1/todos';
  private token: string = sessionStorage.getItem('token') as string;

  // private setToStorage(): void {
  //   this.storage.setItem(TODO, JSON.stringify(this.todos));
  // }

  //headers: Authorization: Bearer token

  getAll(): Observable<ApiResponse<Todo[]>> {
    try {
      return this.http.get<ApiResponse<Todo[]>>(this.baseUrl, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      });
    } catch (error: any) {
      return error.message;
    }
  }

  // getAll(): Observable<Todo[]> {
  //   return new Observable<Todo[]>((observer: Observer<Todo[]>) => {
  //     const sessionTodos: string = this.storage.getItem(TODO) as string;
  //     try {
  //       //Tenary
  //       //kondisi ? 'bener' : 'tidak-benar'
  //       const todos: Todo[] = sessionTodos
  //         ? JSON.parse(sessionTodos)
  //         : [
  //             {
  //               id: 1,
  //               name: 'makan',
  //               isCompleted: false,
  //             },
  //           ];
  //       this.todos = todos;
  //       this.setToStorage();
  //       observer.next(this.todos);
  //     } catch (error: any) {
  //       observer.error(error.message);
  //     }
  //   });
  // }

  save(todo: Todo): Observable<ApiResponse<Todo>> {
    try {
      const headers = this.setHeaders();
      if (todo.id) {
        return this.http.put<ApiResponse<Todo>>(this.baseUrl, todo, {
          headers,
        });
      }
      return this.http.post<ApiResponse<Todo>>(this.baseUrl, todo, { headers });
    } catch (error: any) {
      return error.message;
    }
  }

  // save(todo: Todo): Observable<void> {
  //   return new Observable<void>((observer: Observer<void>) => {
  //     try {
  //       if (todo.id) {
  //         this.todos = this.todos.map((t) => {
  //           if (t.id === todo.id) t = todo;
  //           return t;
  //         });
  //       } else {
  //         console.log('todo.component:', todo);
  //         todo.id = this.todos.length + 1;
  //         this.todos.push(todo);
  //         observer.next();
  //       }
  //       this.setToStorage();
  //     } catch (error: any) {
  //       observer.error(error.message);
  //     }
  //   });
  // }

  get(id: string): Observable<ApiResponse<Todo>> {
    try {
      const headers = this.setHeaders();
      return this.http.get<ApiResponse<Todo>>(`${this.baseUrl}/${id}`, {
        headers,
      });
    } catch (error: any) {
      return error.message;
    }
  }

  // get(id: number): Observable<Todo> {
  //   return new Observable<Todo>((observer: Observer<Todo>) => {
  //     try {
  //       observer.next(this.todos.find((t) => t.id === id) as Todo);
  //     } catch (error: any) {
  //       observer.error(error.message);
  //     }
  //   });
  // }

  remove(id: string): Observable<ApiResponse<string>> {
    try {
      const headers = this.setHeaders();
      return this.http.delete<ApiResponse<string>>(`${this.baseUrl}/${id}`, {
        headers,
      });
    } catch (error: any) {
      return error.message;
    }
  }

  // remove(id: number): Observable<void> {
  //   return new Observable<void>((observer: Observer<void>) => {
  //     try {
  //       for (let index = 0; index < this.todos.length; index++) {
  //         if (this.todos[index].id === id) {
  //           this.todos.splice(index, 1);
  //         }
  //       }
  //       this.setToStorage();
  //     } catch (error: any) {
  //       observer.error(error.message);
  //     }
  //   });
  // }

  toggle(todo: Todo): Observable<void> {
    try {
      const headers = this.setHeaders();
      todo.isCompleted = !todo.isCompleted;
      const { id, name, isCompleted } = todo;
      return this.http.put<void>(
        this.baseUrl,
        { id, name, isCompleted },
        { headers }
      );
    } catch (error: any) {
      return error.message;
    }
  }

  // toggle(todo: Todo): Observable<void> {
  //   return new Observable<void>((observer: Observer<void>) => {
  //     try {
  //       this.todos.forEach((t) => {
  //         if (t.id === todo.id) t.isCompleted = !t.isCompleted;
  //         this.setToStorage();
  //       });
  //     } catch (error: any) {
  //       observer.error(error.message);
  //     }
  //   });
  // }

  private setHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token') as string;
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
