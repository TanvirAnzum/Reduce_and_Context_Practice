import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContextProvider';


function Form() {
    const [globalState, dispatch] = useContext(NotesContext);

    return (
        <div className="Form">
            <form action="">
                <input type="text" placeholder='Write your notes here' value={globalState.inputString} onChange={(event) => {
                    dispatch({
                        type: 'GET_INPUT',
                        payload: event.target.value,
                    })
                }
                } />

                <button onClick={(e) => {
                    e.preventDefault();
                    globalState.isEditable ? dispatch({
                        type: 'UPDATE_NOTE'
                    }) : dispatch({
                        type: 'ADD_NOTE'
                    });
                }}>{
                        globalState.isEditable ? 'Update Note' : 'Create Note'
                    }</button>
            </form>
        </div>
    )
}

export default Form