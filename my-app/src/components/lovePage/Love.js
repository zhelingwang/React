import React,{Component} from "react"
import { Link } from "react-router-dom";
import '../../App.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Love extends Component{
    componentWillMount(){
        let {dispatch} = this.props;
        dispatch({
            type:"CHANGE_LOVE_NAME",
            data:{
                name:"love"
            }
        })
    }
    render(){
        console.log(this.props);
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{this.props.loveName.name}</h1>
                    <div><Link to="/">To index</Link></div>
                    <div>
                        <h4>current component props</h4>
                        <span style={{fontSize:16}}>you can also see in console</span>
                        <p style={{fontSize:20,textAlign:"left"}}>
                            loveData: {JSON.stringify(this.props.loveData)}<br />
                            loveName: {JSON.stringify(this.props.loveName)}<br />
                            location: {JSON.stringify(this.props.location)}<br />
                            history: {JSON.stringify(this.props.history)}<br />
                            match: {JSON.stringify(this.props.match)}<br />
                            dispatch: {this.props.dispatch.toString()}<br />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(function(state){ //map state to props
    return state.lovePage; //只选择当前页的state: lovePage
    //state : 返回aboutPage和lovePage,即所有的state数据
})(Love))
