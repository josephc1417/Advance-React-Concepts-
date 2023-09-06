import React from 'react'
import { data } from "../../../data";




//when removing a single element we want to do it by removing the it based on the id 
// the each id has a button attached to it and that button funcion should remove the id of the person element that it is attached to 

// 1.create a variable that will update the item {const updatedItems}
  
// 2.create a variable that will update the item  (person.filter = objItem => objItem.id !== idToRemove)      





const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
  const newPeople = people.filter((person) => person.id !== id)
  setPeople(newPeople);
  }

  const handelClearAll =() => {
  setPeople([]);
  }
  return(
    <div>
      {people.map((person) => {
        const {id,name} = person;
      return(
        <div key={id}>
          <h4>{name}</h4>
          <button type='button' className='btn' style={{margin:'1rem'}} onClick={()=> removeItem(id)}>remove</button>
        </div>
      )
      })}

      <button type='button' className='btn' style={{margin:'1rem'}} onClick={() => setPeople([])}>removall</button>
    </div>
  )









}
export default UseStateArray;
