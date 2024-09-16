import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { DirectivesLearningComponent } from './directives-learning/directives-learning.component';
import { PipesLearningComponent } from './pipes-learning/pipes-learning.component';

const childsroutes:Routes=[
  {
    path:'directives',
    component:DirectivesLearningComponent
  },
  {
    path:'pipes',
    component:PipesLearningComponent
  }
]

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    children:childsroutes
  },
  {
    path:'employees',
    component:EmployeesComponent
  }, 
  {
    path:'addemployee',
    component:EmployeeInputComponent
  },
  {
    path:'adminlogin',
    component:AdminLoginComponent
  },
  {
    path:"**",
    component:ViewNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  /* we can use routing concepts in AppModule */
})
export class AppRoutingModule { }
