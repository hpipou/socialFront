import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../core/services/guard/guard.service';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { NotfoundprofilComponent } from './notfoundprofil/notfoundprofil.component';
import { ViewprofilComponent } from './viewprofil/viewprofil.component';

const routes: Routes = [
  {path:'view', component:ViewprofilComponent, canActivate:[GuardService]},
  {path:'edit', component:EditprofilComponent, canActivate:[GuardService]},
  {path:'**', component:NotfoundprofilComponent, canActivate:[GuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
