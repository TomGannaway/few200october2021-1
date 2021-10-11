import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  // Just for typescript - interfaces do nothing for JavaScript
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}


// Selector Functions - just write functions that return the state your components and stuff need.

// Selector per "branch" of your application state.
const selectCounterBranch = (state: AppState) => state.counter;


export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  b => b.current
)

export const selectResetDisabled = createSelector(
  selectCounterCurrent,
  c => c === 0
)
