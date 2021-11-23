import React from 'react';

export const AppActionTypes  = {
  SET_JSON_TREE: 'APP/SET_APP_LOADING',
}

export const INITIAL_APP_STATE = {
  jsonBinTree: null,
  dispatch: () => {},
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case AppActionTypes.SET_JSON_TREE:
      return { ...state, jsonBinTree: action.payload };
    default:
      return state;
  }
};

export const AppContext = React.createContext(INITIAL_APP_STATE);
