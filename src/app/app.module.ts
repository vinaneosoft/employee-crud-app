import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { EmployeeInputComponent } from './employee-input/employee-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    EmployeesComponent,
    EmployeeCardComponent,
    DecoratorComponent,
    OrderbyPipe,
    EmployeeInputComponent,
   // components, pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule // other modules
  ],
  providers: [],        // services
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }
