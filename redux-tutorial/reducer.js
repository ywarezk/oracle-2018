
const initialState = {
    isLoadingFromServer: false,
    todoItems: []
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state, isLoadingFromServer: action.payload
            }
        case 'SET_ITEMS':
            return {
                ...state, todoItems: action.payload
            }
        default:
            return state;
    }
}