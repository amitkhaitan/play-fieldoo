
import { Component, OnInit ,ViewChild,ElementRef  } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { IAppState } from './../store';
import * as layoutActions from './../store/layout/layout.actions';
const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)
@Component({
  selector: 'play-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("template",{static: false}) template: ElementRef;
  
  browserName;
  iosStandalone;
  constructor(private router : Router,
    private store: Store<IAppState>,
  ) {
  }
  public showTab: Boolean = false;
  modalRef: BsModalRef;

  /*Redux*/
  playersHelp$: Observable<boolean>;
  agentsHelp$: Observable<boolean>;
  verifiedAccountsHelp$: Observable<boolean>;


  ngOnInit() {
    this.playersHelp$ = this.store.pipe(select('layout'), pluck('playersHelp'), distinctUntilChanged<any>());
    this.agentsHelp$ = this.store.pipe(select('layout'), pluck('agentsHelp'), distinctUntilChanged<any>());
    this.verifiedAccountsHelp$ = this.store.pipe(select('layout'), pluck('verifiedAccountsHelp'), distinctUntilChanged<any>());

   this.getHelp();
    //let newVariable: any;
    //newVariable = window.navigator;
   
   // let browser= /iPad|iPhone|iPod/.test(navigator.userAgent) ;
   // console.log(browser);
  
   // if (browser) {
    //  this.browserName = 'ios';
    
  //  }
    // console.log(newVariable.standalone);
    // if (newVariable.standalone) 
    
    //   console.log(newVariable.standalone);
    
    // this.iosStandalone = true;
    
  
  }
getApp(){
  this.showTab=true;

}
hide(){
  this.showTab=false;
}
    
  

  getHelp() {

    this.store.dispatch({ type: layoutActions.HELP_GET_PLAYERS });
    this.store.dispatch({ type: layoutActions.HELP_GET_AGENTS });
    this.store.dispatch({ type: layoutActions.HELP_GET_VERIFIED_ACCOUNTS });
  }
  
  
  
}
