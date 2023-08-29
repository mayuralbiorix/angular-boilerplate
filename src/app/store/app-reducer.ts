import { createReducer, on } from '@ngrx/store';
import { Appstate, initialState } from './app-state';
import { setNavStatus } from './app-action';

export const appReducer = createReducer(
  initialState,
  on(setNavStatus, (state, { navStatus }): Appstate => {
    return {
      ...state,
      ...navStatus
    };
  })
  );