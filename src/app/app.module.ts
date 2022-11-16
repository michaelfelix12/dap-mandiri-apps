import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { DashboardModule } from './dashboard/dashboard.module';

const components = [
  AppComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    PagesModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
