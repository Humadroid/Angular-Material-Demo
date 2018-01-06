import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './app-angular-material.module';
import { AppComponent } from './app.component';
import { PresentationLogicModule } from './presentation-logic/presentation-logic.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './business-logic/interceptors/loader-interceptor.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    PresentationLogicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
