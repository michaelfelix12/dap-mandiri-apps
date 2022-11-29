import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component'
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

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
        PagesRoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
