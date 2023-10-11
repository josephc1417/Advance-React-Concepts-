import React from 'react';
import { data } from '../../../data';
import { useReducer, useState } from 'react';



// ● (1) - defaultState = lim f(x) = ∞  ● 
const defaultState = {
  people: data,
}


// ● (2) - reducer function ● 
const reducer = () => {
}

{/*!(x)ReducerBasics Functional Component*/}
const ReducerBasics = () => {

// ● (3) - useReducer Hook ●   
const { state, dispatch } = useReducer(reducer, defaultState);



  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const resetList = () => {
    // setPeople(data);
  }

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
        onClick={() => setPeople(data)}
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
