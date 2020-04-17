import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateNewTrackerComponent } from './create-new-tracker/create-new-tracker.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './app.auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'create-new-tracker', component:CreateNewTrackerComponent, canActivate: [AuthGuard]},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

