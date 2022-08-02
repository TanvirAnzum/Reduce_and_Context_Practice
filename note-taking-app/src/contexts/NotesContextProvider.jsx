import React, { createContext, useReducer } from 'react';
import { initState, reducer } from '../reducers/reducer';

export const NotesContext = createContext();



function NotesContextProvider(props) {

  const [globalState, dispatch] = useReducer(reducer, initState);

  return (
    <NotesContext.Provider value={[globalState, dispatch]}>
      {props.children}
    </NotesContext.Provider>
  )
}

export default NotesContextProvider