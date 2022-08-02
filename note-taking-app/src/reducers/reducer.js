export const initState = {
    inputString: '',
    notesList: [],
    isEditable: false,
    editableNotes: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_INPUT': {
            return (
                {
                    ...state,
                    inputString: action.payload,
                }
            )
        }

        case 'ADD_NOTE': {
            const newNote = {
                id: Date.now(),
                title: state.inputString,
            }
            return (
                {
                    ...state,
                    notesList: [...state.notesList, newNote],
                    inputString: '',
                }
            )
        }

        case 'UPDATE_NOTE': {
            state.editableNotes.title = state.inputString;
            return (
                {
                    ...state,
                    editableNotes: null,
                    isEditable: false,
                    inputString: '',
                }
            )
        }

        case 'EDIT_NOTE': {
            const tobeEdited = state.notesList.find(item => item.id === action.payload);
            return (
                {
                    ...state,
                    isEditable: true,
                    editableNotes: tobeEdited,
                    inputString: tobeEdited.title,
                }
            )
        }

        case 'DELETE_NOTE': {
            const afterDeletion = state.notesList.filter(item => {
                if (item.id === action.payload) return false;
                else return true;
            })

            return (
                {
                    ...state,
                    notesList: afterDeletion,
                }
            )
        }

        default:
            return state;
    }
}

