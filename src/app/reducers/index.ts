import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  // Just for typescript - interfaces do nothing for JavaScript
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}
