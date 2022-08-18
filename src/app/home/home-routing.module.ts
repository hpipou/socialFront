import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../core/services/guard/guard.service';
import { HomeComponent } from './home/home.component';
import { MostdislikedComponent } from './mostdisliked/mostdisliked.component';
import { MostlikedComponent } from './mostliked/mostliked.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OnlyimageComponent } from './onlyimage/onlyimage.component';
import { OnlytextComponent } from './onlytext/onlytext.component';
import { PosteditComponent } from './postedit/postedit.component';
import { PostnewComponent } from './postnew/postnew.component';

const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[GuardService]},
  {path:'most-liked', component:MostlikedComponent, canActivate:[GuardService]},
  {path:'most-disliked', component:MostdislikedComponent, canActivate:[GuardService]},
  {path:'only-image', component:OnlyimageComponent, canActivate:[GuardService]},
  {path:'only-text', component:OnlytextComponent, canActivate:[GuardService]},
  {path:'new-post', component:PostnewComponent, canActivate:[GuardService]},
  {path:'edit-post', component:PosteditComponent, canActivate:[GuardService]},
  {path:'**', component:NotfoundComponent, canActivate:[GuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
