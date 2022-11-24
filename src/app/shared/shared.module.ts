import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HighlightsDirective } from './directives/highlights.directive';
import { BsButtonDirective } from './directives/bs-button.directive';
import { DateCustomPipe } from './pipes/date-custom.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HighlightsDirective,
    BsButtonDirective,
    DateCustomPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightsDirective,
    BsButtonDirective,
    DateCustomPipe
  ]
})
export class SharedModule { }
