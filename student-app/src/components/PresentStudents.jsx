import React, { useContext } from 'react';
import { studentContext } from '../contexts/StudentProvider';

function PresentStudents() {
    const [globalState, dispatch] = useContext(studentContext);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>PRESENT STUDENTS</h1>
            <ul>
                {
                    globalState.studentList.filter(item => {
                        if (item.isPresent) return true;
                        else return false;
                    }).map(student => (
                        <li><span>{student.name}</span>
                            <button onClick={
                                () => {
                                    dispatch({
                                        type: 'TOGGLE_STATE',
                                        payload: student.id,
                                    })
                                }
                            }>Accidentally Added</button></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PresentStudents