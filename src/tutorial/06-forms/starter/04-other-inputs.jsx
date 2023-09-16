import { useState } from 'react';

// Creating a list of options that are normally dynamic (coming from an api)
// rendering the list so that the user can select an option form the list via a checkbox or checked input
// adding {select} under label element 
// goal is to render the list inside of the select input {option element} and when the user selects a box/option >> update the state   
// your state should reflect the updated value that the user has selected 
//
//example list 
const frameworks = ['react', 'angular', 'vue', 'svelte'];


const OtherInputs = () => {
const [shipping, setShipping] = useState(false) 
const [framework, setFramework] = useState('react')


//create handler function for framwork
const handleFramework =() => {
  // setFramework(e.target.?)
}

const handleFunction =(e) => {
console.log(e.target.checked);  
setShipping(e.target.checked)
}
// inside of each input element we have an attribute is assigned and  linked to our state obj
// when that value changes we need an event handler function that updates the state based on the event targeted attribute(checked)
// we need to link the event of the checkbox attribute  being checked to the change of state obj its assigned to 
// since we've created our handler function, we need to add our onChange function to the input to link it to the e/h function
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}                                                    
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label  htmlFor='shipping'> Free Shipping </label>
          <input type='checkbox' name='shipping' id="shipping" checked={shipping}
          onChange ={handleFunction}/>
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
