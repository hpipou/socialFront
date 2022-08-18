import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AuthService, private route: Router) { }

  formLogin:any
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email, Validators.maxLength(30)]),
      password: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    })
  }

  successStatus=false
  errorStatus=false
  successMSG=""
  errorMSG=""

  connexion(){
    this.loginService.login(this.formLogin.value).subscribe(
      (data)=>{

        localStorage.setItem('id', data.id)
        localStorage.setItem('username', data.username)
        localStorage.setItem('isAdmin' , data.isAdmin)
        localStorage.setItem('isProfil', data.isProfil)
        localStorage.setItem('imageURL', data.imageURL)
        localStorage.setItem('token', data.token)

        this.successStatus=true;
        this.successMSG="Connexion réussie"
        setTimeout(()=>{this.successStatus=false}, 4000)
        this.formLogin.reset()
        if(data.isProfil==true){this.route.navigate(['/'])}
        else(this.route.navigate(['/profil/edit']))
      },
      (err)=>{
        this.errorStatus=true;
        this.errorMSG=err.error
        setTimeout(()=>{this.errorStatus=false}, 4000)
      },
      ()=>{console.log("Operation complete")}
    )
  }

}
