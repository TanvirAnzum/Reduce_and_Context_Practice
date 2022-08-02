import React, { createContext, useReducer } from 'react';
import { initState, reduce } from '../reducers/reduce';


export const studentContext = createContext();

function StudentProvider(props) {

  const [globalState,dispatch] = useReducer(reduce,initState)

  return (
    <studentContext.Provider value={[globalState,dispatch]}>
        {props.children}
    </studentContext.Provider>
  )
}

export default StudentProvider