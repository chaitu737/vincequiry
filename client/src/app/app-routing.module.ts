import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RegistrationStep1Component } from './Components/registration-step1/registration-step1.component';


const routes: Routes = [
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path: 'reg',
    component: RegistrationStep1Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
