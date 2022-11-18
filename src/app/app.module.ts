import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { PagesModule } from './pages/pages.module'
import { CourseModule } from './pages/course/course.module';
import { AppRoutingModule } from './app-routing.module';
import { DemoModule } from './demo/demo.module';

const components = [
  AppComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    CourseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
