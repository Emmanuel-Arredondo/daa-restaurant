import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users=[
    {username:'emma.arre',},
    {username:'emma.arre',},
    {username:'emma.arre',},
    {username:'emma.arre',},
    {username:'emma.arre',},
    {username:'emma.arre',},

  ];
  displayedColumns: string[] = [
    'username',

    'actions',
  ];
  
  addButtonClicked() {
  alert('boton de adicion activado');
  
  }
  
  deleteButtonClicked() {
    alert('boton de borrado activado');
    
    }
  
}
