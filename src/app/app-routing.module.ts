import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildAaComponent } from "./demo/component-a/child-aa/child-aa.component";
import { ChildAbComponent } from "./demo/component-a/child-ab/child-ab.component";
import { ComponentAComponent } from "./demo/component-a/component-a.component";
import { ComponentBComponent } from "./demo/component-b/component-b.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  //Eager Load
  // {
  //   path: 'component-a',
  //   component: ComponentAComponent,
  //   children: [
  //     {
  //       path: 'child-aa',
  //       component: ChildAaComponent
  //     },
  //     {
  //       path: 'child-ab',
  //       component: ChildAbComponent
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'child-aa',
  //       pathMatch: 'full'
  //     },
  //   ]
  // },
  // {
  //   path: 'component-b',
  //   component: ComponentBComponent
  // },
  // {
  //   path: '',
  //   redirectTo: '/component-a',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }

  // Lazy Load
  // {
  //   path: 'demo',
  //   loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'demo/component-a',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: '',
    redirectTo: 'demo/component-a',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{ }
