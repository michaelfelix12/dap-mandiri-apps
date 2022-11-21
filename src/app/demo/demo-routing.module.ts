import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildAaComponent } from "./component-a/child-aa/child-aa.component";
import { ChildAbComponent } from "./component-a/child-ab/child-ab.component";
import { ComponentAComponent } from "./component-a/component-a.component";
import { ComponentBComponent } from "./component-b/component-b.component";

const routes: Routes = [
  {
    path: 'component-a',
    component: ComponentAComponent,
    children: [
      {
        // eager loading
        path: 'child-aa', // -> /component-a/child-aa
        component: ChildAaComponent
      },
      {
        path: 'child-ab', // /component-a/child-ab
        component: ChildAbComponent
      },
      {
        path: '',
        redirectTo: 'child-aa',
        pathMatch: 'full'
      }
    ]
  },
  {
    //ketika path dibuat seperti ini maka wajib memberikan variabel
    //setelah e.g. component-b/iii
    //karena path variabel bersifat wajib diisi
    path: 'component-b/:id',
    component: ComponentBComponent
  },
  {
    path: '',
    redirectTo: 'component-a',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
