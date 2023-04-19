import { Component,OnInit } from '@angular/core';
import { user } from '../_models/user.model';
import { UserService } from '../_services/user/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:user[]=[];

  displayedColumns: string[] = [
    'username',
    'name',
    'actions',
  ];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  
  addButtonClicked() {
  alert('boton de adicion activado');
  
  }
  
  deleteButtonClicked() {
  this.userService.deleteUser();
    }
  
}
