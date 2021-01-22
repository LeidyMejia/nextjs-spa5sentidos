import { useReducer, useContext, createContext } from 'react';

const initalState = {};

const AppStateContext = createContext(initalState);
const AppDispatchContext = createContext(initalState);

const reducer = (state, action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        { children }
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export const useApp = () => useContext(AppStateContext);
export const useDispatchApp = () => useContext(AppDispatchContext);