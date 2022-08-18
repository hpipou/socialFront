import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/core/services/profil/profil.service';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css']
})
export class EditprofilComponent implements OnInit {

  constructor(private showMyProfil:ProfilService, private route:Router) { }

  valeur="myprofil"
  myprofilData:any={
    'id':"",
    'username':"",
    'email':"",
    'isAdmin':"",
    'fname':"",
    'lname':"",
    'imageURL':"",
    'mobile':"",
    'city':"",
    'country':"",
    'createdAt':""
  }

  formGroupEditProfi:any
  ngOnInit(): void {
    this.showMyProfil.showmyprofil().subscribe(
      (data)=>{this.myprofilData=data},
      (err)=>{console.log(err)}
    )
  }

  ///////////////////////////////////////////////////
  /////////////// EDIT MY PROFIL
  ///////////////////////////////////////////////////

  successStatus=false
  errorStatus=false
  successMSG=""
  errorMSG=""
  saveEditProfil(){
    this.showMyProfil.editMyProfil(this.formGroupEditProfi.value).subscribe(
    (data)=>{
      this.successStatus=true;
      this.successMSG="Enregistré avec succès";
      setTimeout(()=>{this.successStatus=false}, 1290);
      setTimeout(()=>{window.location.reload()}, 1300)},
    (err)=>{ this.errorStatus=true; this.errorMSG=err.error; setTimeout(()=>{this.errorStatus=false}, 4000)}
    )
  }

  myprofil(){this.valeur="myprofil"}
  editprofil(){
    this.formGroupEditProfi= new FormGroup({
      fname: new FormControl(this.myprofilData.fname, Validators.required),
      lname: new FormControl(this.myprofilData.lname, Validators.required),
      mobile : new FormControl(this.myprofilData.mobile, Validators.required),
      city: new FormControl(this.myprofilData.city, Validators.required),
      country: new FormControl(this.myprofilData.country, Validators.required),
    })
    this.valeur="editprofil"
  }

  ///////////////////////////////////////////////////
  /////////////// STATISTIQUES
  ///////////////////////////////////////////////////
  statsData={'pub':0,'com':0,'lik':0,'dis':0}
  statistics(){
    this.valeur="statistics";
    this.showMyProfil.statsAccounts().subscribe(
      (data)=>{this.statsData=data},
      (err)=>{console.log(err)})
  }

  ///////////////////////////////////////////////////
  /////////////// CHANGER MOT DE PASSE
  ///////////////////////////////////////////////////
  formGroupchangeMDP:any
  changePassword(){
    this.formGroupchangeMDP= new FormGroup({
      password: new FormControl('', Validators.required),
      ancienpassword: new FormControl('', Validators.required)})
    this.valeur="changePassword"}

  successStatusMDP=false
  errorStatusMDP=false
  successMSGMDP=""
  errorMSGMDP=""
  enregistrerMDPChange(){
    this.showMyProfil.changePassword(this.formGroupchangeMDP.value).subscribe(
    (data)=>{
      this.successStatusMDP=true;
      this.successMSGMDP="Mot de passe changé avec succès";
      setTimeout(()=>{this.successStatusMDP=false}, 4000)},
    (err)=>{ this.errorStatusMDP=true; this.errorMSGMDP=err.error; setTimeout(()=>{this.errorStatusMDP=false}, 4000)}
    )
  }

  ///////////////////////////////////////////////////
  /////////////// DELETE ACCOUNT
  ///////////////////////////////////////////////////
  formGroupDeleteUser:any
  deleteAccount(){
    this.formGroupDeleteUser= new FormGroup({password: new FormControl('', Validators.required)})
    this.valeur="deleteAccount"
  }

  successStatusDelete=false
  errorStatusDelete=false
  successMSGDelete=""
  errorMSGDelete=""
  deleteMyAccount(){
    console.log(this.formGroupDeleteUser.value)
    this.showMyProfil.deleteDefMyAccount(this.formGroupDeleteUser.value).subscribe(
    (data)=>{
      this.successStatusDelete=true;
      this.successMSGDelete="Compte supprimé avec succès.";
      localStorage.removeItem('token')
      localStorage.removeItem('imageURL')
      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('isProfil')
      localStorage.removeItem('isAdmin')
      localStorage.removeItem('id')
      setTimeout(()=>{this.successStatusDelete=false}, 2000);
      setTimeout(()=>{this.route.navigate(['/auth/login'])},2100)},
    (err)=>{ this.errorStatusDelete=true; this.errorMSGDelete=err.error; setTimeout(()=>{this.errorStatusDelete=false}, 4000)}
    )
  }

  ///////////////////////////////////////////////////
  /////////////// DISCONNECT
  ///////////////////////////////////////////////////
  counterDown=3
  disconnect(){
    this.valeur="disconnect"
    setTimeout(()=>{this.counterDown=2},1000)
    setTimeout(()=>{this.counterDown=1},2000)
    setTimeout(()=>{this.counterDown=0},2800)
    setTimeout(()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('imageURL')
      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('isProfil')
      localStorage.removeItem('isAdmin')
      localStorage.removeItem('id')
    },3000)
    setTimeout(()=>{this.route.navigate(['/auth/login'])},3000)

  }

}
