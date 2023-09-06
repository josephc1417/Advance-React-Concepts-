import { useEffect, useState, } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);


  useEffect(() => {
// The code that we want to run, this is the code that we know is going to run at least once on mount

console.log('The value is:',value);

//optional return function
return () => {
  console.log('lets clean this shit up')
}
  },[value]) 

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn'  onClick={() => setValue(value - 1)}>
        Decrement
      </button>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increment
      </button>
    </div>
  );
};
export default CodeExample;
