import React,{Component} from "react"
import { Provider } from 'react-redux'
import store from "./../../store/index"
import Love from "./Love"

export default class LovePage extends Component{

    render(){
        return (
            <Provider store={store} >
                <Love />
            </Provider>
        );
    }
}