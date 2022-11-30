import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoComponent } from "./todo.component";

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'form',
        component: TodoFormComponent
      },
      {
        path: 'form/:id',
        component: TodoFormComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
