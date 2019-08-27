import { Action } from '@ngrx/store';

export const HELP_GET_PLAYERS = '[Layout]: get players';
export const HELP_GET_PLAYERS_SUCCESS = '[Layout]: get players success';
export const HELP_GET_PLAYERS_FAIL = '[Layout]: get players fail';

export class HelpGetPlayers implements Action {
  readonly type = HELP_GET_PLAYERS;

  constructor(public payload?: any) {
  }
}

export class HelpGetPlayersSuccess implements Action {
  readonly type = HELP_GET_PLAYERS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class HelpGetPlayersFail implements Action {
  readonly type = HELP_GET_PLAYERS_FAIL;

  constructor(public payload: any) {
  }
}

export const HELP_GET_AGENTS = '[Layout]: get agents';
export const HELP_GET_AGENTS_SUCCESS = '[Layout]: get agents success';
export const HELP_GET_AGENTS_FAIL = '[Layout]: get agents fail';

export class HelpGetAgents implements Action {
  readonly type = HELP_GET_AGENTS;

  constructor(public payload?: any) {
  }
}

export class HelpGetAgentsSuccess implements Action {
  readonly type = HELP_GET_AGENTS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class HelpGetAgentsFail implements Action {
  readonly type = HELP_GET_AGENTS_FAIL;

  constructor(public payload: any) {
  }
}

export const HELP_GET_VERIFIED_ACCOUNTS = '[Layout]: get verified accounts';
export const HELP_GET_VERIFIED_ACCOUNTS_SUCCESS = '[Layout]: get verified accounts success';
export const HELP_GET_VERIFIED_ACCOUNTS_FAIL = '[Layout]: get verified accounts fail';

export class HelpGetVerifiedAccounts implements Action {
  readonly type = HELP_GET_VERIFIED_ACCOUNTS;

  constructor(public payload?: any) {
  }
}

export class HelpGetVerifiedAccountsSuccess implements Action {
  readonly type = HELP_GET_VERIFIED_ACCOUNTS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class HelpGetVerifiedAccountsFail implements Action {
  readonly type = HELP_GET_VERIFIED_ACCOUNTS_FAIL;

  constructor(public payload: any) {
  }
}

export type Actions =
  | HelpGetPlayers
  | HelpGetPlayersSuccess
  | HelpGetPlayersFail
  | HelpGetAgents
  | HelpGetAgentsSuccess
  | HelpGetAgentsFail
  | HelpGetVerifiedAccounts
  | HelpGetVerifiedAccountsSuccess
  | HelpGetVerifiedAccountsFail;

