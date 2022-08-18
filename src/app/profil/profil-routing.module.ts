import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { NotfoundprofilComponent } from './notfoundprofil/notfoundprofil.component';
import { ViewprofilComponent } from './viewprofil/viewprofil.component';

const routes: Routes = [
  {path:'view', component:ViewprofilComponent},
  {path:'edit', component:EditprofilComponent},
  {path:'**', component:NotfoundprofilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
