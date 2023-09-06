import { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:'peter',
    age:'24',
    hobby:'Personal Growth',
  });
  
  
  const handleOnClick = () => {
    setPerson({...person, name:'tom',age:22,hobby:'Personal'});
    
  }
  return(
    
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h3>Enjoys to :{person.hobby}</h3>
      <button className='btn' onClick={handleOnClick}>Next</button>
    </>
    ) 
    
  
  
  
  
  
  
  
  
  
  
  
  
  return <h2>useState object example</h2>;
  return <h2>useState object example</h2>;
};

export default UseStateObject;
