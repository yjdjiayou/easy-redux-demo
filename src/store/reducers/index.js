import counter1 from './counter1';
import counter2 from './counter2';
import {combineReducers} from '../../redux';

let reducers = combineReducers({
    counter1,//0
    counter2//0
});

export default reducers;