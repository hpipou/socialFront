import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  // AFFICHER MON PROFIL
  showmyprofil():Observable<any>{
    return this.http.get(environment.hostUrl+"user/myprofil")
  }

  // EDIT MY PROFIL
  editMyProfil(form:any):Observable<any>{
    return this.http.post(environment.hostUrl+"user/profil", form)
  }
  // EDIT MY PROFIL
  statsAccounts():Observable<any>{
    return this.http.get(environment.hostUrl+"user/stats")
  }

  // CHANGE PASSWORD
  changePassword(form:any):Observable<any>{
  return this.http.put(environment.hostUrl+"user/password", form)
  }

  // CHANGE PASSWORD
  deleteDefMyAccount(form:any):Observable<any>{
  return this.http.post(environment.hostUrl+"user/delete", form)
  }

}
