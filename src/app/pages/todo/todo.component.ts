import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
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

  onSaveTodo(newTodo: Todo): void {
    console.log('todo.component:', newTodo);
    newTodo.id = this.todos.length + 1;
    this.todos.push(newTodo);
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }

  onToggleTodo(): void {
    // console.log('todo.component.onToggleTodo:', todo);
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }

  onDeleteTodo(todo: Todo): void {
    for (let index = 0; index < this.todos.length; index++) {
      if (this.todos[index].id === todo.id) {
        this.todos.splice(index,1)
      }
    }
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }
}
