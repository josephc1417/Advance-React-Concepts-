import { useState, useEffect } from 'react';


const MultipleEffects = () => {
  //**useState (x2)................**
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)


//**useEffect #1..........**
useEffect(() => {
  console.log('hello there from value1',value1,value2*2);  
  
  return(() => {
    console.log('this is the clean up function');
  })
},[value2,value1])

//**useEffect #2................**
useEffect(() => {
  console.log('hello there from value2:',value2);

  return(() => {
    console.log('this is the clean up function');
  })

},[value2])
  return(
    <div>
      <h1>Value {value1}</h1>
      <button type='button' className='btn' onClick={() => setValue1(value1 +1)}>Value 1</button>
      <h1>Value {value2}</h1>
      <button type='button' className='btn' onClick={() => setValue2(value2 +1)}>Value 2</button>
    </div>
  )
}

export default MultipleEffects;