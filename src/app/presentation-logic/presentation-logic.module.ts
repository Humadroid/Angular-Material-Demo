import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ContactMeComponent
  ],
  exports: [
    HomeComponent,
    ContactMeComponent,
    SharedModule
  ]
})
export class PresentationLogicModule { }
