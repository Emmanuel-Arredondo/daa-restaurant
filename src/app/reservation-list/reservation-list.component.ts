import { Component } from '@angular/core';
import { Reservation } from '../_models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
reservations:Reservation[] =[
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},  
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},  
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},  
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:new Date('2023,01,07'),reservationSchedule:12},

];
displayedColumns: string[] = [
  'reservationDate',
  'reservationSchedule',
  'people',
  'name',
  'email',
  'phone',
  'actions',
];

editButtonClicked() {
alert('boton de edicion activado');

}

deleteButtonClicked() {
  alert('boton de borrado activado');
  
  }

}
