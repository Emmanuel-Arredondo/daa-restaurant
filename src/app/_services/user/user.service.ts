import { Injectable } from '@angular/core';
import { user } from 'src/app/_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:user[]=[
    {username:'emma.arre',name:'Emmanuel Arredondo'},
    {username:'emma.arre',name:'Emmanuel Arredondo'},
    {username:'emma.arre',name:'Emmanuel Arredondo'},

    {username:'emma.arre',name:'Emmanuel Arredondo'},


  ];

  constructor() { }

  getUsers():user[]{
    return this.users;
  }

  deleteUser(){
    alert('boton de borrado activado');
  }
}
