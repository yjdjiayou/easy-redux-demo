import * as types from '../action-types';
export default   {
    increment(value){
        //store.dispatch({type:INCREMENT})
        return {type:types.INCREMENT1,name:value};
    },
    decrement(value){
        //store.dispatch({type:DECREMENT});
        return {type:types.DECREMENT1,number:value};
    }
}