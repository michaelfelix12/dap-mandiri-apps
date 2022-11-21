import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component'
import { RouterModule } from '@angular/router';
import { CoursesModule } from "./courses/courses.module";
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [
        PagesComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [
        CommonModule,
        HomeModule,
        RouterModule,
        CoursesModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }
