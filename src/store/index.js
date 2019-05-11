import {createStore} from 'redux';
import reducers from './reducers';
let store = createStore(reducers,{counter1: 6, counter2: 8});
export default store;