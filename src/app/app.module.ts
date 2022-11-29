import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { RouteGuard } from './shared/guard/route.guard';
const components = [
  AppComponent,
]

@NgModule({
    declarations: [...components],
    providers: [RouteGuard],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
