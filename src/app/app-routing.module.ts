import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './presentation-logic/home/home.component';
import { ContactMeComponent } from './presentation-logic/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact_me', component: ContactMeComponent },
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
