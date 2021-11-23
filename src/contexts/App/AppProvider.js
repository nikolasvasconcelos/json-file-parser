import React, { useReducer } from 'react'
import {AppContext, INITIAL_APP_STATE, appReducer} from './AppContext';

export const AppProvider = ({children}) => {
  const [appContext, appDispatcher] = useReducer(appReducer, INITIAL_APP_STATE)
  return (
    <AppContext.Provider value={{...appContext, dispatch: appDispatcher}}>
      {children}
    </AppContext.Provider>
  )
}
