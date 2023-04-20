import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from 'src/app/_models/login-info.model';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(loginInfo:LoginInfo){
    this.http.post< {token:string}  >(environment.apiUrl+'/login',loginInfo)
    .subscribe(res => {
      console.log(res);
  });
}
}
