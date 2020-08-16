import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SiteModule } from '../app/shared/components/site/site.module';
import { RequestInterceptor } from './shared/interceptors/request.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SiteModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule 
  ],
  providers:[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:RequestInterceptor,
        multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
