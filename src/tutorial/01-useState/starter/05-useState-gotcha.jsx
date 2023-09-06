import {useState} from 'react'



const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  
  const handleClick =() => {
    setTimeout(() => {
      setCount(count + 1);
      
    },3000)
    console.log(count);
  }
  return(
    <div>
      <h2>{count}</h2>
      <button type='button'  className='btn' onClick={handleClick}>Add More</button>
    </div>
  ) 
};

export default UseStateGotcha;














