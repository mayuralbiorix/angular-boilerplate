export interface Appstate {
    isNavExpanded: boolean;
  }

  export const initialState: Readonly<Appstate> = {
    isNavExpanded: true,
  };