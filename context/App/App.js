import React, { createContext, useReducer } from 'react';

const defaultAppState = {
  siteName: '',
  siteTitle: '',
  siteOwners: [],
  siteBaseUrl: '',
  siteDescription: '',
};

const AppDataContext = createContext(defaultAppState);
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

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultAppState, init);

  return (
    <AppDataContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        { children }
      </AppDispatchContext.Provider>
    </AppDataContext.Provider>
  )
}

export default AppProvider;