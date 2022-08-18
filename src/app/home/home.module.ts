import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MostlikedComponent } from './mostliked/mostliked.component';
import { MostdislikedComponent } from './mostdisliked/mostdisliked.component';
import { PostnewComponent } from './postnew/postnew.component';
import { PosteditComponent } from './postedit/postedit.component';
import { OnlytextComponent } from './onlytext/onlytext.component';
import { OnlyimageComponent } from './onlyimage/onlyimage.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    HomeComponent,
    MostlikedComponent,
    MostdislikedComponent,
    PostnewComponent,
    PosteditComponent,
    OnlytextComponent,
    OnlyimageComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
