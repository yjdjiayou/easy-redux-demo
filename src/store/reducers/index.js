import counter1 from './counter1';
import counter2 from './counter2';
import {combineReducers} from '../../redux';
//reducer 是一个处理器（函数），接收两个参数，第一个参数是仓库中的状态，第二个是组件派发过来的行为
// 函数体里面包含一些修改仓库中状态的操作，会根据传进来的action（组件派发的行为），做不同的操作，最终会返回新的状态

// 因为 reducer 全局只能有一个
//所以用 combineReducers 合并所有组件的 reducer，最终返回一个函数。
let reducers = combineReducers({
    counter1,//0
    counter2//0
});

export default reducers;

// 一个仓库只有一棵状态树，仓库只能有一个 reducer 管理这个状态树，
// 但是如果有复杂应用时，有几百个组件，每个组件都有自己的状态，有自己的管理状态的方法。
// 如果都放在一个 reducer 里面，会很混乱，js文件中的代码量会很庞大。
// 所以需要把 reducer 拆分，每个组件的状态和管理状态的方法都分成一个独立的模块，然后将这些组件的 reducer 合并一个。