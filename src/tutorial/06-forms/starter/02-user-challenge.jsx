import {useState} from "react"
import { data } from "../../../data";



const UserChallenge = () => {
//useState 
const [name, setName] = useState("")  
const [nameData, setNameData] = useState(data)// {data is an array}



//Event Handler >> onSubmit 
const handelSubmit = (e) => {
  e.preventDefault();
 // light form validation
 if(!name) return
 const fakeId = Date.now();

 // create new user
 const newUSer ={id:fakeId,name:name}

 //Update array of users 
 const updatedUsers =[...nameData,newUSer]
 setNameData(updatedUsers)

  console.log("form submitted");
  setName("")
}


const handelRemove =(id) => {
 const updatedUsers=nameData.filter((user) => user.id !== id)
 setNameData(updatedUsers)



//Function return value
  return (
    <div>
      <form className='form' onSubmit={handelSubmit}>
        <h4>Add User</h4>
        
        <div className='form-row'>
        <label htmlFor='name' className='form-label'>
        name
        </label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-input' id='name' />
        </div>
        
        <button type='submit' className='btn btn-block'>
        submit
        </button>
        </form>
        {/* render users below */}
        <h1>Users</h1>
        {nameData.map((names) => {
          console.log(names);
          return(
            <ul key={names.id}>
            <li>{names.name}</li>
            <button type='submit'onClick={() => handelRemove(names.id)} className='btn'>
            Remove Name
            </button>
        </ul>
        )
        })}
        </div>
        );
      };
      export default UserChallenge;
      




      