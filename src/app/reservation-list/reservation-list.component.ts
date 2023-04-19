import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
reservations=[
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:'2023-03-30T6:00:00:000Z',reservationSchedule:'12',guests:7},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:'2023-03-30T6:00:00:000Z',reservationSchedule:'12',guests:7},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:'2023-03-30T6:00:00:000Z',reservationSchedule:'12',guests:7},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:'2023-03-30T6:00:00:000Z',reservationSchedule:'12',guests:7},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:'2023-03-30T6:00:00:000Z',reservationSchedule:'12',guests:7},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:'2023-03-30T6:00:00:000Z',reservationSchedule:'12',guests:7},
  {name:'Emmanuel Arredondo',email:'emmanuelarredondo@hotmail.com',phone:'55-1234-5678',people:2,reservationDate:'2023-03-30T6:00:00:000Z',reservationSchedule:'12',guests:7},

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
