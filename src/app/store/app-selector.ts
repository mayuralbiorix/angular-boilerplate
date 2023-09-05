import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Appstate } from './app-state';
 
export const selectAppState = createFeatureSelector<Appstate>('appState');

export const selectNavStatus = createSelector(selectAppState, (state)=>{
    return state.isNavExpanded as boolean;
});

export const selectLoadingStatus = createSelector(selectAppState, (state)=>{
    return state.isShowLoading as boolean;
});