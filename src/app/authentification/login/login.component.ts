import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  formLogin:any
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email, Validators.maxLength(30)]),
      password: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    })
  }
  connexion(){

  }

}
