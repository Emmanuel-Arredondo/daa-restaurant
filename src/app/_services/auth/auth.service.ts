import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { LoginInfo } from 'src/app/_models/login-info.model';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(loginInfo:LoginInfo){
    return this.http.post< {token:string}  >(environment.apiUrl+'/login',loginInfo)
    .pipe(
      catchError(this.handleError),
      tap(res=>console.log(res.token))
    );
}

private handleError(error:HttpErrorResponse){
  if(error.status===401){
    return throwError(()=> new Error('Usuario o contraseña incorrectos'));
  }else{
    return throwError(()=> new Error('Error desconocido'));
  }
}

}
