import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  isLoading: boolean = true;

  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.onLoadTodo();
  }

  onLoadTodo(): void {
    this.isLoading = false;
    this.todoService.getAll().subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
      }
    });
  }

  onCheckTodo(todo: Todo): void {
    this.todoService.toggle(todo).subscribe();
  }

  onDeleteTodo(todo: Todo): void {
    this.todoService.remove(todo.id).subscribe();
  }
}
