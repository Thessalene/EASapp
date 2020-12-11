import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { HomeRoutingModule } from './home/home-routing.module';
import { NavigationRoutingModule } from './navigation/navigation/navigation-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { DriversRoutingModule } from './drivers/drivers-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { PlanningComponent } from './planning/planning.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'planning',
    component: PlanningComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    DetailRoutingModule,
    NavigationRoutingModule,
    DriversRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
