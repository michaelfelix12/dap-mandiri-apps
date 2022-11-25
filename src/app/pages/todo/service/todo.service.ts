import { Injectable } from '@angular/core';
import { TODO, Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  constructor() { }

  private setToStorage(): void {
    this.storage.setItem(TODO, JSON.stringify(this.todos));
  }

  getAll(): Todo[] {
    const sessionTodos: string = this.storage.getItem(TODO) as string;
    try {
      //Tenary
      //kondisi ? 'bener' : 'tidak-benar'
      const todos: Todo[] = sessionTodos
        ? JSON.parse(sessionTodos)
        : [
          {
            id: 1,
            name: 'makan',
            isCompleted: false,
          },
        ];
      this.todos = todos;
      this.setToStorage()
      return todos;
    } catch (error: any) {
      return error.message;
    }
  }

  save(todo: Todo): void {
    try {
      if (todo.id) {
        this.todos = this.todos.map((t) => {
          if (t.id === todo.id) t = todo;
          return t;
        });
        // sessionStorage.setItem(TODO, JSON.stringify(this.todos));
      } else {
        console.log('todo.component:', todo);
        todo.id = this.todos.length + 1;
        this.todos.push(todo);
        // sessionStorage.setItem(TODO, JSON.stringify(this.todos));
      }
      this.setToStorage();

    } catch (error: any) {
      return error.message;
    }
  }

  get(id: number): Todo {
    try {
      return this.todos.find((t) => t.id === id) as Todo;
    } catch (error: any) {
      return error.message;
    }
  }

  remove(id: number): void {
    try {
      for (let index = 0; index < this.todos.length; index++) {
        if (this.todos[index].id === id) {
          this.todos.splice(index, 1);
        }
      }
      this.setToStorage();
    } catch (error: any) {
      console.error(error.message);
    }
  }

  toggle(todo: Todo): void {
    try {
      this.todos.forEach((t) => {
        if (t.id === todo.id) t.isCompleted = !t.isCompleted;
        this.setToStorage();
      })
    } catch (error: any) {
      console.error(error.message);
    }
  }

}
