import {useRenderer} from 'react-dom';
import data from '../../../data'; 
import { useReducer } from 'react';


// create a keyvalue pair for the state 
// set people to data
const defaultState = {
people:data,
isLoading:false;    
}




// create your conditions for your reducer via action types
const reducer = (state,action) => {
    if(action.type === 'CLEAR_LIST') {
        return {...state ,people : []};
    }
    throw new Error (`No matching "${action.type}" - action type`);
    
    if(action.type === 'REMOVE_ITEM') {
        let newPeople = state.people.filter((person) => person.id !== action.payload.id);
        return {...state, people: newPeople};
    }
 }


//create your variables that you will use in the reducer
const CLEAR_LIST = 'CLEAR_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';
const RESET_LIST = 'RESET_LIST';


const ReducerBasics = () => {

    //call useRenderer function to get the state and dispatch function
    const [state, dispatch] = useReducer(reducer, defaultState); 


// create your callback functions for your actions
const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: {id}});
}

const clearList = () => {
    dispatch({type: CLEAR_LIST});
}

const resetList = () => {
    dispatch({type: RESET_LIST})
}


    return (
        
    )
}