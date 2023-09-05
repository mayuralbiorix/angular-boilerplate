import { createAction, props } from "@ngrx/store";
import { Appstate } from "./app-state";

 // set side navigation toggle status 
export const setNavStatus = createAction(
    '[Source] Update Nav Status',
    props<{navStatus: Appstate}>()
);

// set loading status
export const setLoadingStatus = createAction(
    '[Source] Update Loading Status',
    props<{loadingStatus: Appstate}>()
);