import {useState} from 'react'

const MultipleInputs = () => {
  //setting the state to a obj so that we can access multiple input fields dynamically
  
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
  })

  const handleChange = (e) => {
console.log(e.target.name);
console.log(e.target.name);


//destructuring the {user} obj so that all props can be accessed 
//destructuring the {user} obj so that all props can be accessed 
setUser({{...user,[e.target.name:e.targe.value]}})
  

}
  



//!MUST!! You have to add the name attribute to the input element with this particular setup  
//!MUST!! name should be assigned to the key of value exp: value = {user.name} >> name = 'name'   
  return (
    <div>
      <form className='form' >
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' value={user.name} onChange={handleChange} name ='name' className='form-input' id='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' value={user.email} onChange={handleChange}  name ='email' className='form-input' id='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password'value={user.password}  onChange={handleChange}  name ='password' className='form-input' id='password' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
