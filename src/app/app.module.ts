import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
   // components, pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // other modules
  ],
  providers: [],        // services
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }
