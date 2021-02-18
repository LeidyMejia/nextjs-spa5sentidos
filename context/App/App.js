import React, { createContext, useReducer, useContext } from 'react';
import { appReducer, defaultAppState } from 'context/App/appReducer';

/**
 *
 * Create context
 * AppContext is a context with the global state of App
 * AppDispatchContext is a context with a dispatch to modify the state from another components
 */
const AppContext = createContext(defaultAppState);
const AppDispatchContext = createContext(() => {});

const init = (initialState) => {
  return {...initialState}
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultAppState, init);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        { children }
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext);
export const useDispatchApp = () => useContext(AppDispatchContext);
