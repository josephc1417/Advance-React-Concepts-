import { useState } from 'react';

// rendering form without controlled inputs {not specifying the state value }
//! This can be done using useRef Hook
//! We can also complete the same task using form data API (may be better approach if you have more than one input)
//! this is used in vjs where we use an interphase that allows us to construct and represent the key value pairs and their values 
// when working with form data make sure that you have a {name} attribute the accurately represents that specific form input 
//event.target>> refers to the DOM element that triggers an event
// in React, event.currentTarget refer to the DOM element that the event is listening in on
// since the event, in this case, is set on a form, event.currentTarget will return the form element 
// within handler function, declarea new variable (formData) and initialize it to (new FormData)
// pass in the event and the currentTarget to (FormData constructor as an argument) >> This will create a new form object that can be populated with data
// all the current keys and values will be populated 
// this is commonly used when sending data via AJAX request or when working with file uploads  
// essenially your creating a new instance of the FormData obj that will be use to represent KVP's at have a direct correlation to the form fields and their values 
// additional KVP's can be added and deleted using additional methods 
//! In-order to access the values within the new form obj, we can use the (.get()) method
//! Exp: If we wanted to get the email would would declare and initialize ane variable >> (email) << 
//! call the (.get) method on formData >> = formData() <<
//! And pass in the initialized (name attribute value) ('email') of the corresponding email input element
// Thus: cosnt email = formData.get('email') 
// Once user types in an within the email input field, you should be able to see that value within the browser if you log it (Exp: line:34)
// since formData is a Array of array's we want to convert it to an OBJ (Exp: line:36)
//^ we can implement >>> const newUser = Object.fromEntries(formData) NOTE: This syntax is from (VJS) and is not provided by (React) - still useable <<<
//^ This will transform an [Array] of Array's (data structure) into an {js OBJ} with KVP's
// you can send this information to the server if you want now that its in obj form 
//! make sure to clear the current values and check for empty input fields (validation) - iterate over the array
// to remove the current values from the input field's use >> e.currentTarget.reset



const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget)
    // console.log(formData);
    // const email = formData.get('email')
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1)
    e.currentTarget.reset()


  };
  return ( 
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
