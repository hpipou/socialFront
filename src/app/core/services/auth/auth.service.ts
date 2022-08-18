import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  // REGISTER SERVICE
  urlRegister= environment.hostUrl+"user/register"
  register(form:any):Observable<any>{
    return this.http.post(this.urlRegister, form)
  }

  // LOGIN SERVICE
  urlLogin= environment.hostUrl+"user/login"
  login(form:any):Observable<any>{
    return this.http.post(this.urlLogin, form)
  }


}
