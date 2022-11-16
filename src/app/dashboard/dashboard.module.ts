import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { UserListComponent } from './user/list/user-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HilightComponent } from './hilight/hilight.component';
import { NextStepComponent } from './next-step/next-step.component';
import { ResourceComponent } from './resource/resource.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    CustomerListComponent,
    UserListComponent,
    ToolbarComponent,
    HilightComponent,
    NextStepComponent,
    ResourceComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CustomerListComponent,
    UserListComponent,
    ToolbarComponent,
    HilightComponent,
    NextStepComponent,
    ResourceComponent,
    FooterComponent,
  ]
})
export class DashboardModule { }
