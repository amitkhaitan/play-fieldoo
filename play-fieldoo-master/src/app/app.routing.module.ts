import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { PlayComponent } from './play/play.component';
import { TrialsComponent } from './trials/trials.component';
import { FacesComponent } from './faces/faces.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '', component :HomeComponent
    
  },
  { path: 'play', component: PlayComponent },
  { path: 'trials', component: TrialsComponent },
  { path: 'faces', component: FacesComponent }


  
];

//export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  PlayComponent,
  TrialsComponent,
  FacesComponent,
  
];