import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateNewTrackerComponent } from './create-new-tracker/create-new-tracker.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'create-new-tracker', component:CreateNewTrackerComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

