import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import {
  pluck,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  flatMap,
  delayWhen,
  withLatestFrom, catchError
} from 'rxjs/internal/operators';
import { forkJoin, of } from 'rxjs';

import * as layoutActions from './layout.actions';
import { IAppState } from '../index';

import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';

import * as Webflow from '../../../../assets/global/scripts/webflow.js';
import { webFlowAnimationSetup } from '../../helpers/webflow-animation.helper';

declare var Webflow: any;

@Injectable()
export class LayoutEffects {

  private playersAPI = environment.apiEndpoint + '/api/players.json';  // URL to players api
  private agentsAPI = environment.apiEndpoint + '/api/agents.json';  // URL to agents api
  private verifiedAccountsAPI = environment.apiEndpoint + '/api/verifiedAccounts.json';  // URL to verifiedAccounts api

  @Effect()
  getPlayersHelp$ = this.actions$
    .pipe(
      ofType(layoutActions.HELP_GET_PLAYERS),
      switchMap((action: layoutActions.HelpGetPlayers) => {

        return this.httpService.get(`${this.playersAPI}`)
          .pipe(
            catchError((error) => of(new layoutActions.HelpGetPlayersFail(error))),
            map((response) => new layoutActions.HelpGetPlayersSuccess(response.data))
          );
      })
    );

  @Effect()
  getAgentsHelp$ = this.actions$
    .pipe(
      ofType(layoutActions.HELP_GET_AGENTS),
      switchMap((action: layoutActions.HelpGetAgents) => {

        return this.httpService.get(`${this.agentsAPI}`)
          .pipe(
            catchError((error) => of(new layoutActions.HelpGetAgentsFail(error))),
            map((response) => new layoutActions.HelpGetAgentsSuccess(response.data))
          );
      })
    );

  @Effect()
  getVerifiedAccounts$ = this.actions$
    .pipe(
      ofType(layoutActions.HELP_GET_VERIFIED_ACCOUNTS),
      switchMap((action: layoutActions.HelpGetVerifiedAccounts) => {

        return this.httpService.get(`${this.verifiedAccountsAPI}`)
          .pipe(
            catchError((error) => of(new layoutActions.HelpGetVerifiedAccountsFail(error))),
            map((response) => new layoutActions.HelpGetVerifiedAccountsSuccess(response.data))
          );
      })
    );

  @Effect({ dispatch: false })
  refreshWebFlowAnimations$ = this.actions$
    .pipe(
      ofType(layoutActions.HELP_GET_PLAYERS_SUCCESS, layoutActions.HELP_GET_VERIFIED_ACCOUNTS_SUCCESS, layoutActions.HELP_GET_AGENTS_SUCCESS),
      debounceTime(10),
      map((action: layoutActions.HelpGetPlayersSuccess) => {
        Webflow.require('ix2').init(webFlowAnimationSetup);
      })
    );

  constructor(private readonly actions$: Actions,
              private readonly httpService: HttpService,
              private readonly store: Store<IAppState>) {
  }
}
