import { AnyAction } from "redux";
import { Coin } from "../../models";
import { SET_WATCHLIST_DATA } from "../actions/watchlList";

export interface WatchlistState {
  watchlistData: Coin[];
}

const initialState: WatchlistState = {
  watchlistData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_WATCHLIST_DATA:
      return {
        ...state,
        watchlistData: action.coinData,
      };
    default:
      return state;
  }
};
