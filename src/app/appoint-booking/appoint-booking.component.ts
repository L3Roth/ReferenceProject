import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appoint-booking',
  templateUrl: './appoint-booking.component.html',
  styleUrls: ['./appoint-booking.component.scss']
})
export class AppointBookingComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  appointmentDate: string;
  name: string;
  email: string;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email)
      .subscribe((createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.name = '';
        this.email = '';
        const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString();
        this.successMsg = `Appointment Booked Successfully for ${appointmentDate}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}
