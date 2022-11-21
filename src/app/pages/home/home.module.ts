import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { InstructorComponent } from './instructor/instructor.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { CourseComponent } from './course/course.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

const components = [
    BannerComponent,
    NewsletterComponent,
    ServiceComponent,
    AboutComponent,
    FaqComponent,
    InstructorComponent,
    ContactComponent,
    HomeComponent,
    CourseComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class HomeModule { }
