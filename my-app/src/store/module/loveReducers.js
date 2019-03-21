
import { combineReducers } from 'redux';

function loveData(state="This is a love data",action){

    if(action.type === "LOVE"){
        return action.data;
    }

    return state;
}

function loveName(state={name:"love name"},action){

    if(action.type === "CHANGE_LOVE_NAME"){
        return Object.assign({},state,action.data)
    }

    return state;
}

export default combineReducers({
    loveData,
    loveName
})