
export const initState = {
    input: '',
    isEditable: false,
    editableStudent: null,
    studentList: [],
}

export function reduce(state, action) {
    switch (action.type) {
        case 'SET_INPUT': {
            return (
                {
                    ...state,
                    input: action.payload,
                }
            )
        }

        case 'ADD_STUDENT': {
            if (state.input) {
                const newStudent = {
                    id: Date.now(),
                    name: state.input,
                    // isPresent: undefined
                }

                return (
                    {
                        ...state,
                        studentList: [...state.studentList, newStudent],
                        input: '',
                    }
                )
            }
            else {
                alert('YOU ARE DUMB!!');
            }
            return state;
        }

        case 'UPDATE_STUDENT': {
            if (state.input) {
                state.editableStudent.name = state.input;
                return (
                    {
                        ...state,
                        input: '',
                        isEditable: false,
                        editableStudent: null,
                    }
                )
            }
            else {
                alert('YOU ARE DUMB!!');
            }
            return state;
        }


        case 'EDIT_STUDENT': {
            const tobeEdited = state.studentList.find(item => item.id === action.payload);
            console.log('hello');
            return (
                {
                    ...state,
                    editableStudent: tobeEdited,
                    isEditable: true,
                    input: tobeEdited.name,
                }
            )
        }

        case 'DELETE_STUDENT': {
            const afterDeletion = state.studentList.filter(item => {
                if (item.id === action.payload) return false;
                else return true;
            })

            return (
                {
                    ...state,
                    studentList: afterDeletion,
                }
            )
        }

        case 'PRESENT_STUDENT': {
            const item = state.studentList.find(student => student.id === action.payload);
            console.log(item);
            if (item.isPresent === undefined) {
                item.isPresent = true;
            }
            else {
                alert("Present State cant be changed!")
            }
            return (
                {
                    ...state,
                }
            );
        }

        case 'ABSENT_STUDENT': {
            const item = state.studentList.find(student => student.id === action.payload);
            if (item.isPresent !== undefined) {
                alert("Present State cant be changed!")
            }
            else {
                item.isPresent = false;
            }
            return (
                {
                    ...state,
                }
            );
        }

        case 'TOGGLE_STATE': {
            const item = state.studentList.find(student => student.id === action.payload);
            item.isPresent = !item.isPresent;

            return (
                {
                    ...state,
                }
            )
        }

        default:
            return state;
    }
}