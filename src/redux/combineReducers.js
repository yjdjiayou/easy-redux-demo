
export default function(reducers){
  const reducerKeys = Object.keys(reducers);//['counter1','counter2']
  return function (state={},action){//state={counter1:0,counter:0}
    const nextState = {};//下一个状态对象
      //如果派发了一个行为，修改了某个状态，最终每个reducer都要重新计算
      //因为combineReducers这个函数本身也不知道到底谁需要去计算一遍，只能挨个通知，每个reducer都要重新去计算一次
    for(let i=0;i<reducerKeys.length;i++){
        const key = reducerKeys[i];//counter1
        const reducer = reducers[key];//counter1
        const previousStateForKey = state[key];
        const nextStateForKey = reducer(previousStateForKey,action);
        nextState[key] = nextStateForKey;
    }
    return nextState;
  }
}
