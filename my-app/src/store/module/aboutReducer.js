
import { combineReducers } from 'redux';

function aboutData(state="about data",action){

    if(action.type === "ABOUT"){
        return action.data;
    }

    return state;
}

function aboutObj(state={name:"66"},action){

    if(action.type === "ABOUT"){
        return Object.assign({},state,action.data)
    }

    return state;
}

export default combineReducers({
    aboutData,
    aboutObj
})