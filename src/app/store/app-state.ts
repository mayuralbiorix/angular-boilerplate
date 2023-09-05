export interface Appstate {
    isNavExpanded?: boolean;
    isShowLoading?: boolean;
  }

  export const initialState: Readonly<Appstate> = {
    isNavExpanded: true,
    isShowLoading: false,
  };