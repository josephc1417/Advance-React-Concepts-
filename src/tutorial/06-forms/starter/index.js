 const {user} = useState({
    name:'',
    email:'',
    password:'',
  })

  // thus
 const  {...user}// spreads out all the properties within the user obj
 const setUser({...user}) // updates the state including all the obj properties 
 const setUser({...user, }) // updates the state including all the obj properties
 //{...user,} = the property 
 //{...user,} = after the comma, we will target the vale of the one of the selected properties within the useState obj 

 //! state obj ={(x3)prop:""},}initial obj
 //! state obj ={(x3)prop:""},,update} update via target name attribute 
 //! state obj ={(x3)prop:""},(,name:}
 //!{ (prop)..user,+ (value) } 

 //by importing the initial obj of user we capture the (spread) the prop and the valued state
 //we add a comma to add new K/V pair = name(form input):e.target.value(data that is typed into input field from which the name attribute is associated)
 //name(form input):e.target.value >> need to be {dynamic} or we can only update that specific input field 
 //CORRECT WAY!! >> [e.target.name](prop):e.target.value(updated input value of name) 
 //notice that all your input elements have a {name} attribute assigned to =('x') value
 //hence which ever field is recieving new input exp: email field, it can be accessed by
 //targeting the name attribute of that field witch inturn will become the property value 