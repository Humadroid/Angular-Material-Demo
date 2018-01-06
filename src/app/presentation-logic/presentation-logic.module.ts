import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    ContactMeComponent
  ]
})
export class PresentationLogicModule { }
