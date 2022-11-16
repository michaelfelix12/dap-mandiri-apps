import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { PagesModule } from './pages/pages.module'

const components = [
  AppComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
