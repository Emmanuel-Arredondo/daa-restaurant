import { Component } from '@angular/core';
import { user } from '../_models/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:user[]=[
    {username:'emma.arre',name:'Emmanuel Arredondo'},
    {username:'emma.arre',name:'Emmanuel Arredondo'},
    {username:'emma.arre',name:'Emmanuel Arredondo'},

    {username:'emma.arre',name:'Emmanuel Arredondo'},


  ];
  displayedColumns: string[] = [
    'username',
    'name',
    'actions',
  ];
  
  addButtonClicked() {
  alert('boton de adicion activado');
  
  }
  
  deleteButtonClicked() {
    alert('boton de borrado activado');
    
    }
  
}
