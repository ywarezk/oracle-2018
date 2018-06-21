

// {
//     todoItems: []
// }
//
// {
//     todoItems: ['item1']
// }
//
// {
//     todoItems: ['item1', 'item2']
// }

export const ADD_ITEM = 'ADD_ITEM';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_ALL_ITEMS = 'SET_ALL_ITEMS';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        payload: isLoading
    }
}

export function addTasksFromServer() {
    // return {
    //     type: 'SET_ALL_ITEMS',
    //     payload: [....]
    // }
    return function(dispatch) {
        dispatch(setIsLoading(true));
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                dispatch({
                    type: SET_ALL_ITEMS,
                    payload: json
                })
                dispatch(setIsLoading(false));
            });
    }
}