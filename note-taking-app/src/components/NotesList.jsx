import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContextProvider';


function NotesList() {
    const [globalState, dispatch] = useContext(NotesContext);


    return (
        <div>
            <ul>
                {
                    globalState.notesList.map(item => (
                        <li key={item.id}><span>{item.title}</span> <button onClick={
                            () => {
                                dispatch({
                                    type: 'EDIT_NOTE',
                                    payload: item.id,
                                })
                            }
                        }>Edit</button>
                            <button onClick={
                                () => {
                                    dispatch({
                                        type: 'DELETE_NOTE',
                                        payload: item.id,
                                    })
                                }
                            }>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NotesList