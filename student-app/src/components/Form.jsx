import React, { useContext } from 'react';
import { studentContext } from '../contexts/StudentProvider';

function Form() {
    const [globalState, dispatch] = useContext(studentContext);


    return (
        <div>
            <form action="">
                <input type="text" placeholder='Student Name' value={globalState.input}
                    onChange={
                        (e) => {
                            dispatch({
                                type: 'SET_INPUT',
                                payload: e.target.value,
                            })
                        }
                    }
                />
                <button
                    onClick={
                        (e) => {
                            e.preventDefault();
                            globalState.isEditable ? dispatch({
                                type: 'UPDATE_STUDENT'
                            }) : dispatch({
                                type: 'ADD_STUDENT'
                            })
                        }
                    }
                >
                    {globalState.isEditable ? 'Update Student' : 'Add Student'}
                </button>
            </form>
        </div>
    )
}

export default Form