import React,{Component} from 'react';
import {bindActionCreators} from '../redux';
import store from '../store';
import actions from '../store/actions/counter1';
//使用 bindActionCreators 绑定，可以自动帮我们去 dispatch action，
//不需要我们每次都写一个store.dispatch(xxx)
let boundActions = bindActionCreators(actions,store.dispatch);
//组件 dipatch 的 action 实际上就是一个对象，{type:'INCREMENT'}，里面有一个重要的 type属性
//所以 boundActions.xxx 执行后，最终返回的一定是一个对象
export default class Counter extends Component{
    state = {number:store.getState().counter1};
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            //store.getState()={counter1:0,counter2:0}
            this.setState({number:store.getState().counter1});
        });
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <>
                <p>{this.state.number}</p>
                <button onClick={boundActions.increment}>+</button>
                <button onClick={boundActions.decrement}>-</button>
            </>
        )
    }
}