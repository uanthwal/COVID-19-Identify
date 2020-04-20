import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateNewTrackerComponent } from './create-new-tracker/create-new-tracker.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './app.auth.guard';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { DashboardVisualizationsComponent } from './dashboard-visualizations/dashboard-visualizations.component';
import { DashboardHeatmapComponent } from './dashboard-heatmap/dashboard-heatmap.component';

const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full' },
  {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'data', component:DashboardDataComponent, canActivate: [AuthGuard]},
    {path:'visualization', component:DashboardVisualizationsComponent, canActivate: [AuthGuard]},
    {path:'heatmap', component:DashboardHeatmapComponent, canActivate: [AuthGuard]}
  ]},
  {path:'create-new-tracker', component:CreateNewTrackerComponent, canActivate: [AuthGuard]},
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

