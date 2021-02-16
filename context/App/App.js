import React, { createContext, useReducer, useContext } from 'react';

const defaultAppState = {
  siteName: '',
  siteTitle: '',
  siteOwners: [],
  siteBaseUrl: '',
  siteDescription: '',
};

const AppContext = createContext(defaultAppState);
const AppDispatchContext = createContext(() => {});

const init = (initialState) => {
  return {...initialState}
}

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'add':
      return {...state, payload };
    default:
      throw new Error(`Unhandled type ${type}`);
  }
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
