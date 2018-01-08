import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactMeComponent,
    PageNotFoundComponent
  ],
  exports: [
    HomeComponent,
    ContactMeComponent,
    PageNotFoundComponent,
    SharedModule
  ]
})
export class PresentationLogicModule { }
