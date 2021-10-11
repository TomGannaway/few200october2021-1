import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  // Just for typescript - interfaces do nothing for JavaScript
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}


// Selector Functions - just write functions that return the state your components and stuff need.


export function selectCounterCurrent(state: AppState) {
  return state.counter.current;
}

export function selectResetDisabled(state: AppState): boolean {
  return state.counter.current === 0;
}
