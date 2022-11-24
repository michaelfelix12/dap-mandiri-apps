import { Component, OnInit } from '@angular/core';
import { id, th } from 'date-fns/locale';
import { TODO, Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  // todo!: Todo;
  private _todo!: Todo;

  isLoading: boolean = true;

  today: Date = new Date();

  locale: Locale = th

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loadTodos();
    }, 5000)
  }

  loadTodos(): void {
    this.isLoading = false;

    const sessionTodos: string = sessionStorage.getItem(TODO) as string;
    if (!sessionTodos) {
      const todos: Todo[] = [
        {
          id: 1,
          name: 'Makan',
          isCompleted: false,
        },
        {
          id: 2,
          name: 'Minum',
          isCompleted: true,
        },
      ];

      // JSON.stringify -> mengubah OBJECT ke STRING
      sessionStorage.setItem(TODO, JSON.stringify(todos));
      this.todos = todos;
    } else {
      // JSON.parse -> mengubah STRING ke OBJECT
      this.todos = JSON.parse(sessionTodos);
    }
  }

  //get todo
  get todo(): Todo { return this._todo as Todo }
  //set todo
  set todo(todo: Todo) {
    this.onSaveTodo(todo);
  }

  onSaveTodo(newTodo: Todo): void {
    if (newTodo.id) {
      this.todos = this.todos.map((t) => {
        if (t.id === newTodo.id) t = newTodo;
        return t;
      });
      // sessionStorage.setItem(TODO, JSON.stringify(this.todos));
    } else {
      console.log('todo.component:', newTodo);
      newTodo.id = this.todos.length + 1;
      this.todos.push(newTodo);
      // sessionStorage.setItem(TODO, JSON.stringify(this.todos));
    }
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }

  onToggleTodo(): void {
    // console.log('todo.component.onToggleTodo:', todo);
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }

  onDeleteTodo(todo: Todo): void {
    for (let index = 0; index < this.todos.length; index++) {
      if (this.todos[index].id === todo.id) {
        this.todos.splice(index, 1);
      }
    }
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }

  onEditTodo(todo: Todo): void {
    this._todo = todo;
  }
}
