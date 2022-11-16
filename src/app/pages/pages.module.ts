import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component'

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
