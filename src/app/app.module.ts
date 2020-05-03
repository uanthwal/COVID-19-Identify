import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateNewTrackerComponent } from './create-new-tracker/create-new-tracker.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './app.auth.guard';
import { FilterPipe } from './filter.pipe';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { DashboardVisualizationsComponent } from './dashboard-visualizations/dashboard-visualizations.component';
import { DashboardHeatmapComponent } from './dashboard-heatmap/dashboard-heatmap.component';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import highmaps from 'highcharts/modules/map.src';
import more from 'highcharts/highcharts-more.src';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [more, highmaps];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateNewTrackerComponent,
    DashboardComponent,
    RegisterComponent,
    FilterPipe,
    DashboardDataComponent,
    DashboardVisualizationsComponent,
    DashboardHeatmapComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule.forRoot(),
    ChartModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AppService, AuthGuard, { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  bootstrap: [AppComponent]
})
export class AppModule { }