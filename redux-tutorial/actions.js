

function setLoading(isLoading) {
    return {
        type: 'SET_LOADING',
        payload: isLoading
    }
}

function setItems(todoItems) {
    return {
        type: 'SET_ITEMS',
        payload: todoItems
    }
}


// {
//     type: 'SET_LOADING',
//     payload: true/false
// }

// {
//     type: 'SET_ITEMS',
//     payload: [{title: ... }]
// }