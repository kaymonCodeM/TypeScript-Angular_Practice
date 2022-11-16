import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { DemoService } from './demo.service';
import { Demo2Component } from './demo2/demo2.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
