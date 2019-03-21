import React,{Component} from "react"
import '../App.css';
import { Link } from "react-router-dom";
import store from "./../store/index"

export default class About extends Component{

    render(){
        let {aboutPage} = store.getState();
        console.log(this.props,aboutPage,store.dispatch);
        return (
            <div className="App">
                <div className="App-header">
                    <div style={{fontSize:30,textAlign:"center",padding:30}}>
                        <h1>About</h1>
                        <p><Link to="/">toIndex</Link></p>
                        <h4>current component props</h4>
                        <span style={{fontSize:16}}>you can also see in console</span>
                        <p style={{fontSize:20,textAlign:"left"}}>
                            aboutData: {JSON.stringify(aboutPage.aboutData)}<br />
                            aboutObj: {JSON.stringify(aboutPage.aboutObj)}<br />
                            location: {JSON.stringify(this.props.location)}<br />
                            history: {JSON.stringify(this.props.history)}<br />
                            match: {JSON.stringify(this.props.match)}<br />
                            dispatch: {store.dispatch.toString()}<br />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
