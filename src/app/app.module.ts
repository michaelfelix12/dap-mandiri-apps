import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { PagesModule } from './pages/pages.module'
import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from "./pages/courses/courses.module";
const components = [
  AppComponent,
]

@NgModule({
    declarations: [...components],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        PagesModule,
        AppRoutingModule,
        CoursesModule
    ]
})
export class AppModule { }
