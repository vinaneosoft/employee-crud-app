import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent   // components, pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    // other modules
  ],
  providers: [],        // services
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }
