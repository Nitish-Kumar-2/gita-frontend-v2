import * as t from "../Types";

interface Settings {
  loading: boolean;
  fontSize: string;
  fontFamily: string;
  spacing: string;
  bg: string;
  currentVerse: any;
}

const initialState = {
  loading: false,
  fontSize: "small", //small, large todo: change to exact values
  fontFamily: "proxima", //Tisa Pro, Georgia, Avenir, Proxima Nova
  spacing: "small", //small, medium, large todo: change to exact values
  bg: "bg-light-bg", //bg-light-bg, bg-yellow-bg, bg-dark-bg
  currentVerse: null,
};

const settings = (prevState = initialState, action): Settings => {
  switch (action.type) {
    case t.LOAD_SETTINGS:
      return {
        ...prevState,
        loading: true,
      };
    case t.EDIT_SETTINGS:
      return {
        ...prevState,
        ...action.payLoad,
      };
    case t.SET_CURRENT_VERSE:
      return {
        ...prevState,
        currentVerse: action.payLoad,
      };
    default: {
      return { ...prevState };
    }
  }
};

export default settings;
