import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = []

  constructor() { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() :void {
    this.todos = [
      {
        id: 1,
        name: 'Makan',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Minum',
        isCompleted: true
      },
    ]
  }

}
