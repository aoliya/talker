import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profile-reducer'; 
import dialogsReducer from './reducers/dialogs-reducer'; 
import usersReducer from './reducers/users-reducer'; 
import authReducer from './reducers/auth-reducer';
import appReducer from './reducers/app-reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
    
});

const middlewares = [thunk];

let store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));


export default store;