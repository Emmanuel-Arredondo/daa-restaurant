import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/_models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations:Reservation[] =[
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
  
  ]
  constructor() { }

  getReservations():Reservation[]{
    return this.reservations;
  }

  deleteReservation(){
    alert('boton de borrado activado');
  }

}
