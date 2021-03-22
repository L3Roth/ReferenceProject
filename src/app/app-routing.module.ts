import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointBookingComponent } from './appoint-booking/appoint-booking.component';
import { AppointmentListComponent } from './appoint-booking/appointment-list/appointment-list.component';
import { BilanzrechnerComponent } from './bilanzrechner/bilanzrechner.component';

import { HeaderComponent } from './header/header.component'

const routes: Routes = [
  { path: '', redirectTo: '/app-header', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'app-bilanzrechner', component: BilanzrechnerComponent },
  { path: 'app-appoint-booking', component: AppointBookingComponent },
  { path: 'app-appointment-list', component: AppointmentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
