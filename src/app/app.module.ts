import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { DirectivesLearningComponent } from './directives-learning/directives-learning.component';
import { PipesLearningComponent } from './pipes-learning/pipes-learning.component';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { userReducer } from './ngrx/user.reducer';
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
    AdminLoginComponent,
    HomeComponent,
    ViewNotFoundComponent,
    DirectivesLearningComponent,
    PipesLearningComponent,
    FileUploadComponent,
   // components, pipes
  ],
  imports: [
    BrowserModule,MatButtonModule,MatIconModule,MatListModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({counter:counterReducer, user:userReducer}) // other modules
  ],
  providers: [DatePipe,provideHttpClient(), provideAnimationsAsync() ],        // no need to declare custom services here
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }
