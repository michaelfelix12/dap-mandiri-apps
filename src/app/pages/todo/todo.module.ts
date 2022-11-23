import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todo-routing.module';

const components = [
  TodoComponent,
  TodoFormComponent,
  TodoListComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    TodoRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class TodoModule { }
