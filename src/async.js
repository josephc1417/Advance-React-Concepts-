//fetch
//Returns a promise 

const url ='https://www.course-api.com/react-tours-project'
// fetch(url)
// .then((resp) => resp.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

//**async function */
const getTours = async () => {
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    return(data);
  
} catch (error) {
    console.log(error);
  }
}

//** Response - Invoke function {getTours()} */
console.log(getTours().then()) 