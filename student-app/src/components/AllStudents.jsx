import React, { useContext } from 'react';
import { studentContext } from '../contexts/StudentProvider';

function AllStudents() {
    const [globalState, dispatch] = useContext(studentContext);
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>ALL STUDENTS</h1>
            <ul>
                {
                    globalState.studentList.map(item => (
                        <li><span>{item.name}</span>
                            <button onClick={() => {
                                dispatch({
                                    type: 'EDIT_STUDENT',
                                    payload: item.id,
                                })
                            }}>Edit</button>
                            <button onClick={() => {
                                dispatch({
                                    type: 'DELETE_STUDENT',
                                    payload: item.id,
                                })
                            }}>Delete</button>
                            <button onClick={() => {
                                dispatch({
                                    type: 'PRESENT_STUDENT',
                                    payload: item.id,
                                })
                            }}>Present</button>
                            <button onClick={() => {
                                dispatch({
                                    type: 'ABSENT_STUDENT',
                                    payload: item.id,
                                })
                            }}>Absent</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AllStudents