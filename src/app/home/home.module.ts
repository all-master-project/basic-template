import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HeaderComponent } from './components/header/header.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { ProfesseursComponent } from './components/professeurs/professeurs.component';
import { FoooterComponent } from './components/foooter/foooter.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    PromotionComponent,
    BlogComponent,
    ContactComponent,
    PreloaderComponent,
    HeaderComponent,
    OurServiceComponent,
    ProfesseursComponent,
    FoooterComponent,
  ],
  imports: [CommonModule, BrowserModule, HomeRoutingModule],
})
export class HomeModule {}
