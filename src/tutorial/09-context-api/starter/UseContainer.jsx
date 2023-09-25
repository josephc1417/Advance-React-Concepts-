
function UseContainer  ({ user, logout }) {
  return (
    <div className="user-container">
      {/*₋Conditional Rendering₋*/}
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>logout</button>
        </> 
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UseContainer;
//NOTE: 
//Received props from NavBar container.
//Now we can access the User and create a Logout button for our logout function.