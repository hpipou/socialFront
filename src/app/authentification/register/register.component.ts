import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: AuthService) { }

  formRegister:any
  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email, Validators.maxLength(30)]),
      username: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    })
  }

  successStatus=false
  successMSG=""
  errorStatus=false
  errorMSG=""
  inscription(){
    this.registerService.register(this.formRegister.value).subscribe(
      (data)=>{
        this.formRegister.reset();
        this.successStatus=true;
        this.successMSG=data;
        setTimeout(()=>{this.successStatus=false}, 10000)
      },
      (err)=>{
        this.errorStatus=true;
        this.errorMSG=err.error;
        setTimeout(()=>{this.errorStatus=false}, 4000)
      },
      ()=>{console.log("Operation complete")}
    )
  }

}
