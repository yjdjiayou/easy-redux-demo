import isPlainObject from "./utils/isPlainObject";
import ActionTypes from "./utils/actionTypes";

export default function createStore(reducer,preloadedState,enhancer){
    if (
        (typeof preloadedState === 'function' && typeof enhancer === 'function') ||
        (typeof enhancer === 'function' && typeof arguments[3] === 'function')
    ) {
        throw new Error(
            'It looks like you are passing several store enhancers to ' +
            'createStore(). This is not supported. Instead, compose them ' +
            'together to a single function.'
        )
    }

    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }

    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.')
        }
        return enhancer(createStore)(reducer, preloadedState)
    }

    if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.')
    }
    let currentReducer = reducer;//当前的处理器
    let currentState = preloadedState;//当前状态
    let currentListeners = [];//定义一数组保存当前的监听函数
    function getState(){//返回当前状态
        return currentState;
    }
    
    function dispatch(action){
        if(!isPlainObject(action)){
            //isPlainObject判断一个对象是否是一个纯对象
            //如果传进来的是一个实例对象，就报错
            throw new Error('action必须是一个纯对象');
        }
        if(typeof action.type =='undefined'){
            throw new Error('action的type属性不能是 undefined');
        }
        currentState = currentReducer(currentState,action);
        for(let i=0;i<currentListeners.length;i++){
            const listener = currentListeners[i];
            listener();
        }
        return action;
    }
    function subscribe(listener){
        let subscribed = true;
        currentListeners.push(listener);
        return function unsubscribe(){
            if(!subscribed) return ;
            const index = currentListeners.indexOf(listener);    
            currentListeners.splice(index,1);
            subscribed = false;
        }
    }
    dispatch({type:ActionTypes.INIT});
    return {
        getState,
        dispatch,
        subscribe
        
    }
}