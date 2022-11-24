import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  // @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Input() todo!: Todo;
  @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('TodoFormComponent.todo:', this.todo);
    //   this.setFormValue(this.todo)
    // }, 5000)
  }

  ngOnChanges(): void {
    this.setFormValue(this.todo);
    console.log(this.todo);
  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    isCompleted: new FormControl(false),
  });

  onSubmit(): void {
    console.log(this.todoForm.value);
    this.todoChange.emit(this.todoForm.value);
    this.todoForm.reset();
  }

  setFormValue(todo: Todo): void {
    if (todo) {
      this.todoForm.controls['id']?.setValue(todo.id);
      this.todoForm.controls['name']?.setValue(todo.name);
      this.todoForm.controls['isCompleted']?.setValue(todo.isCompleted);
    }
  }

  //getter
  //tambahkan ! untuk memberikan kesan getter name
  //di bawah tidak akan null
  get name() { return this.todoForm.get('name')! }

  // isFormValid(todoField: string): string {
  //   const control: AbstractControl = this.todoForm.get(todoField) as AbstractControl;
  //   let className = '';
  //   if (control && control.invalid && (control.dirty || control.touched)) {
  //     className = 'is-invalid';
  //   } else if (control && control.valid && (control.dirty || control.touched)) {
  //     className = 'is-valid';
  //   }
  //   return className;
  // }

  //ini pasti akan bernilai true
  isFormValid(todoField: string): boolean {
    const control: AbstractControl = this.todoForm.get(todoField) as AbstractControl;
    return (control && control.invalid && (control.dirty || control.touched))
  }
}
