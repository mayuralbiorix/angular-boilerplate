import { createReducer, on } from '@ngrx/store';
import { Appstate, initialState } from './app-state';
import { setLoadingStatus, setNavStatus } from './app-action';

export const appReducer = createReducer(
  initialState,
  on(setNavStatus, (state, { navStatus }): Appstate => {
    return {
      ...state,
      ...navStatus
    };
    
  }),
  on(setLoadingStatus, (state, { loadingStatus }): Appstate => {
    return {
      ...state,
      ...loadingStatus
    };
  })
  );