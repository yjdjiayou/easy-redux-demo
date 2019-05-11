import {createStore} from '../redux';
import reducers from './reducers';

//createStore 这个函数接收两个参数，第一个参数是reducer，第二个参数是 默认的 state（可选）
let store = createStore(reducers,{counter1: 6, counter2: 8});
export default store;

// import { createStore,applyMiddleware } from '../redux';
// import reducer from './reducers';
// let logger = store => dispatch => action=>{
//     console.log(store.getState().number);
//     dispatch(action);
//     console.log(store.getState().number)
// };
// export default applyMiddleware(logger)(createStore)(reducer);