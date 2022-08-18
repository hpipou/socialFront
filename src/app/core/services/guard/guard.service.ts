import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private http:HttpClient, private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(localStorage.getItem('token')==null || localStorage.getItem('token')==undefined)
    {this.route.navigate(['/auth/login']);return false}
    else{return true;}

  }
}
