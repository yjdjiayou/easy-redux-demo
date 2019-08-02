import {createStore} from '../redux';
import reducers from './reducers';

// 创建 store 有两种写法
// [] 表示可选，不写也没事，redux 内部会自行判断传进来的参数
// 1、createStore(reducers, [preloadedState], [enhancer])
// const store = createStore(reducers, applyMiddleware(routerMiddleware(history), sagaMiddleware));

// 2、enhancer(createStore)(reducer,[preloadedState])
// applyMiddleware 就是一个 store enhancer ，所以可以写成
// const store = applyMiddleware(routerMiddleware(history), sagaMiddleware)(createStore)(reducers);

let store = createStore(reducers,{counter1: 6, counter2: 8});


export default store;

