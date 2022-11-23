import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Input() todo!: Todo;

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('TodoFormComponent.todo:', this.todo);
    //   this.setFormValue(this.todo)
    // }, 5000)
  }

  ngOnChanges(): void {
    this.setFormValue(this.todo);
  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    isCompleted: new FormControl(false),
  });

  onSubmit(): void {
    console.log(this.todoForm.value);
    this.saveTodo.emit(this.todoForm.value);
    this.todoForm.reset();
  }

  setFormValue(todo: Todo): void {
    if (todo) {
      this.todoForm.controls['id']?.setValue(todo.id);
      this.todoForm.controls['name']?.setValue(todo.name);
      this.todoForm.controls['isCompleted']?.setValue(todo.isCompleted);
    }
  }
}
