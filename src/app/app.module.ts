import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BilanzrechnerComponent } from './bilanzrechner/bilanzrechner.component';
import { BudgetItemListComponent } from './bilanzrechner/budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './bilanzrechner/budget-item-list/budget-item-card/budget-item-card.component';
import { AddItemFormComponent } from './bilanzrechner/add-item-form/add-item-form.component';
import { EditItemModalComponent } from './bilanzrechner/edit-item-modal/edit-item-modal.component';
import { FormsModule } from '@angular/forms';
import { AppointBookingComponent } from './appoint-booking/appoint-booking.component';
import { AppointmentListComponent } from './appoint-booking/appointment-list/appointment-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BilanzrechnerComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    AddItemFormComponent,
    EditItemModalComponent,
    AppointBookingComponent,
    AppointmentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
