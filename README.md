# React
    
## React & Redux
- react/react-dom
- redux:store容器
```
createStore, combineReducers, applyMiddleware
```
- react-redux:方便store向下传递给组件
```javascript
Provider,connect    /*往组件props中传入指定的state数据和dispatch*/
```
- redux-thunk:作为中间件来增强creareStore以达到用简便的方式来描述异步action
```javascript
import thunk from "redux-thunk"
applyMiddleware(thunk)
dispatch(function(){}) /*使得dispatch可以处理函数以描述异步action操作*/
```

## redux vs vuex
- dispatch(actionObj/actionCreator)[async]---reducers func[ync]---update state

- call actions func[async]---commit mutations[ync]---update state

## react-router-dom
```javascript
//往组件props中传入路由相关的信息:history/location/match对象
import { withRouter } from 'react-router-dom'
//before
/*
旧版写法:react-router-redux和react-router
import { routerMiddleware } from 'react-router-redux'
import { hashHistory } from 'react-router';
const middleware = [ thunk, routerMiddleware(hashHistory) ]
let store = createStore(
	dashboardReducer,
	applyMiddleware(...middleware)
)
*/
export default connect(mapStateToProps)(Something)
// after 
export default withRouter(connect(mapStateToProps)(Something))
```

> 总结: 1---react-router-dom 2---react/react-dom 3---redux/react-redux/redux-thunk


