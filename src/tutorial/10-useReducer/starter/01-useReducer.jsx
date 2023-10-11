import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';



// ● (1) - defaultState = lim f(x) = ∞  ● 
const defaultState = {
  people: data,
  isLoading:false,
};


// ● (2) - reducer function ● 
const reducer = (state,action) => {
  if(action.type === 'CLEAR_LIST') {
    return {...state, people: []};
  }
}


const ReducerBasics = () => {

// ● (3) - useReducer Hook ●   
const { state, dispatch } = useReducer(reducer, defaultState);


// • (x)removeItem (id) • 
const removeItem = (id) => {
  // let newPeople = people.filter((person) => person.id !== id);
  // setPeople(newPeople);
};

// • (x)clearList {type: 'CLEAR_LIST'} • 
const clearList = () => {
  dispatch({ type: 'CLEAR_LIST' });   
}

// • (x)resetList • 
  const resetList = () => {
  }

console.log('====================================');
console.log(state);
console.log('====================================');

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ?(
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={resetList}
      >
        Reset List
      </button>
      ):(
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
      )}
    </div>
  );
};

export default ReducerBasics;
