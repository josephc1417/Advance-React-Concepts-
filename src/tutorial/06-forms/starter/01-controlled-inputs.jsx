import {useState} from 'react'

export const ControlledInputs = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');


//** */ (1) - use the useState hook to initialize a state variable  {name/email} with an initial value of and empty ""
//** */ (2) - using the value attribute, this binds {the value of the input field} to the {state variable}>> {name/email}
//!(3) -{eventHandler} >>> onChange={(e) => setEmail(e.target.value)}>> when the input field changes >> function is invoked
//!(4) -{eventHandler} >>> onChange={(e) => setEmail(e.target.value)}>> take (e= event) as a param
//!(4) -(e.target.value)}>> takes (e= event) as a param>>  updates the state variable {name/email} with the new value from the input field 
//!(5) -(e.target.value)}>> takes (e= event) as a param>>  updates the state variable {name/email} with the new value from the input field 
/**
 *^^ Summary:
 *^^ So, every time the user types or changes something in the input field,
 *^^ it triggers the onChange event, which in turn calls the arrow function. 
 *^^ This function takes the event as an argument (e) and updates the state with the new value 
 *^^ entered by the user (e.target.value).
 * 
 * && Benefit: this way the input field will always reflect the "current" value of the state variable (x)
 */

const handelSubmit= (e) => {
  e.preventDefault();
  console.log(name,email);
}


return( 
  <form className="form" onSubmit={handelSubmit}>
    <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label className="form-label" htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="FirstName" className="form-input"></input>
    </div>
    <div className="form-row">
      <label className="form-label" htmlFor="email">Email</label>
      <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-input" required placeholder="Email"></input>
    </div>
  <button type="submit" className="btn btn-block">Submit</button>
  </form>
  
)
;
};

