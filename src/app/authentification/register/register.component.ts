import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  formRegister:any
  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email, Validators.maxLength(30)]),
      username: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    })
  }

  inscription(){

  }

}
