import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk"

import aboutReducer from "./module/aboutReducer"
import loveReducer from "./module/loveReducers"

let appReducers = combineReducers({
    aboutPage:aboutReducer,
    lovePage:loveReducer
});

let store = createStore(appReducers,
    applyMiddleware(thunk)
    )

export default store;