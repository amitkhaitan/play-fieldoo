import { Component, OnInit  } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { IAppState } from './../store';
import * as layoutActions from './../store/layout/layout.actions';

@Component({
  selector: 'play-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor( private store: Store<IAppState>) { 
   
  }
  playersHelp$: Observable<boolean>;
  agentsHelp$: Observable<boolean>;
  verifiedAccountsHelp$: Observable<boolean>;

  ngOnInit() {
    this.playersHelp$ = this.store.pipe(select('layout'), pluck('playersHelp'), distinctUntilChanged<any>());
    this.agentsHelp$ = this.store.pipe(select('layout'), pluck('agentsHelp'), distinctUntilChanged<any>());
    this.verifiedAccountsHelp$ = this.store.pipe(select('layout'), pluck('verifiedAccountsHelp'), distinctUntilChanged<any>());

   this.getHelp(); 
  }

  getHelp() {

    this.store.dispatch({ type: layoutActions.HELP_GET_PLAYERS });
    this.store.dispatch({ type: layoutActions.HELP_GET_AGENTS });
    this.store.dispatch({ type: layoutActions.HELP_GET_VERIFIED_ACCOUNTS });
  }

}
