import * as layoutActions from './layout.actions';

export interface ILayout {
  playersHelp?: any;
  agentsHelp?: any;
  verifiedAccountsHelp?: any;
}

const initialState: ILayout = {};

export function layoutReducer(state: ILayout = initialState, action: layoutActions.Actions): ILayout {

  switch (action.type) {

    case layoutActions.HELP_GET_PLAYERS_SUCCESS:

      return {
        ...state,
        playersHelp: action.payload,
      };

    case layoutActions.HELP_GET_AGENTS_SUCCESS:

      return {
        ...state,
        agentsHelp: action.payload,
      };

    case layoutActions.HELP_GET_VERIFIED_ACCOUNTS_SUCCESS:

      return {
        ...state,
        verifiedAccountsHelp: action.payload,
      };

    default:
      return state;
  }
}
