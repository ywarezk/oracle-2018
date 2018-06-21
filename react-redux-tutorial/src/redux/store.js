import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {todoReducer} from "./reducer";
import thunk from 'redux-thunk';
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancers(applyMiddleware(thunk)));
