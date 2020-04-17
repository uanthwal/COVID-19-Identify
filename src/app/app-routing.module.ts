import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateNewTrackerComponent } from './create-new-tracker/create-new-tracker.component';
import { UpdateTrackerComponent } from './update-tracker/update-tracker.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'create-new-tracker', component:CreateNewTrackerComponent},
  {path:'update-tracker', component:UpdateTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

