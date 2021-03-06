import { Switch } from 'react-router-dom';
import {createStore} from 'redux'

const incrementCount = ({incrementBy =1} ={})=>{
    return{
        type:'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({decrementBy =1} ={})=> ({
    type:'DECREMENT',
    decrementBy
})

const reset = ()=>({
    type:'RESET'
})

const set =({count})=>({
    type:'SET', 
    count
})

const countReducer = (state={count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy : 1
            return{
                count: state.count+incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy ==='number' ? action.decrementBy : 1
            return{
                count: state.count-decrementBy
            }
        case 'RESET':
            return{
                count: 0
            }
        case 'SET':
            return{
                count:action.count
            }

        default:
            return state;

    }
    
}

const store = createStore(countReducer)

store.subscribe(()=>{
    console.log(store.getState())
})



store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());



store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));


store.dispatch(set({count:101}));

