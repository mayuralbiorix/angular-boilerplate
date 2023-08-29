import { createAction, props } from "@ngrx/store";
import { Appstate } from "./app-state";
 
export const setNavStatus = createAction(
    '[Source] Update Nav Status',
    props<{navStatus: Appstate}>()
);