import React from 'react';

export const AppActionTypes  = {
  SET_JSON_TREE: 'APP/SET_APP_LOADING',
  SET_FILE_VALUE: 'APP/SET_FILE_VALUE',
}

export const INITIAL_APP_STATE = {
  jsonBinTree: null,
  fileInputValue: null,
  dispatch: () => {},
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case AppActionTypes.SET_FILE_VALUE:
      return { ...state, fileInputValue: action.payload };
    case AppActionTypes.SET_JSON_TREE:
      return { ...state, jsonBinTree: action.payload };
    default:
      return state;
  }
};

export const AppContext = React.createContext(INITIAL_APP_STATE);
