
console.log(store.getState());
store.dispatch(setLoading(true));
console.log(store.getState());

fetch('https://nztodo.herokuapp.com/api/task/?format=json')
    .then((res) => {
        res.json().then((tasks) => {
            store.dispatch(setItems(tasks));
            console.log(store.getState());
            store.dispatch(setLoading(false));
            console.log(store.getState());
        });
    });


store.subscribe(() => {
    console.log('this will run on every state change');
    const ul = document.getElementById('todoitems');
    const state = store.getState();
    for (let task of state.todoItems) {
        const li = document.createElement('li');
        li.innerText = task.title;
        ul.appendChild(li);
    }
});