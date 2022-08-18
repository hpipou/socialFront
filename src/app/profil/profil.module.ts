import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ViewprofilComponent } from './viewprofil/viewprofil.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { NotfoundprofilComponent } from './notfoundprofil/notfoundprofil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewprofilComponent,
    EditprofilComponent,
    NotfoundprofilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfilModule { }
