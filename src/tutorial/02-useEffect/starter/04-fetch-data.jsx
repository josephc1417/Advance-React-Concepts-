import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';



const FetchData = () => {
 const [users, setUsers]=useState([])
 
 
 
 useEffect(() => {
  //** initial statement on render* 


   const getInfo = async () => {
   try {
    const resp = await fetch(url)
    const userData = await resp.json()
    setUsers(userData)
   } catch (error) {
    console.log(error);
   }
  }
  
  getInfo()

  // //**Optional Clean-up return cb function */
  // return(() => {
  //   console.log('optional return');
  },[])
  return(
    <div> 
      <h3>Github User</h3>
      <ul className="users" >
        {users.map((user) => {
       const {id,login,avatar_url,html_url}= user
       return(
          <div>
            <li key={id}></li>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </div>
        )
        })}
      </ul>
    </div>
  ) 
};
export default FetchData;



// [Javascript Nuggets - Fetch API](https://www.youtube.com/watch?v=C_VIKzfpRrg&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=18&t=343s)

// - later in the course we will use axios

// Setup Challenge :

// - import useState and useEffect
// - setup state value
//   - users - default value []
// - setup useEffect
// - MAKE SURE IT RUNS ONLY ON INITIAL RENDER
// - in the cb, create a function which performs fetch functionality
//   - use url I provided in the starter file
//   - you can use .then or async
//   - set users equal to result
//   - iterate over the list and display image, user name and link
// - DON'T WORRY ABOUT CSS, MOST IMPORTANT LOGIC !!!