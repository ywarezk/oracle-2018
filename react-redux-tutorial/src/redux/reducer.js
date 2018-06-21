import {ADD_ITEM, SET_ALL_ITEMS, SET_IS_LOADING} from "./actions";

// {
//     todo: {
//         isLoadingFromServer: false,
//         todoItems: []
//     },
//     user: {
//         username: '',
//         firstName: '',
//             ...
//     }
// }


const initialState = {
    isLoadingFromServer: false,
    todoItems: []
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload]
            }
        case SET_ALL_ITEMS:
            return {
                ...state,
                todoItems: action.payload
            };
        case SET_IS_LOADING:
            return {
                ...state,
                isLoadingFromServer: action.payload
            }
        default:
            return state;
    }
}