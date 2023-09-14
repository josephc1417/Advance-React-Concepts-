export const ControlledInputs = () => {

  return( 
  <form className="form">
    <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label className="form-label" htmlFor="name">Name</label>
        <input id="name"  type="text" placeholder="FirstName" className="form-input"></input>
    </div>
    <div className="form-row">
      <label className="form-label" htmlFor="email">Email</label>
      <input id="email"  type="email" className="form-input" required placeholder="Email"></input>
    </div>
    <div className="form-row">
      <label className="form-label" htmlFor="password">Password</label>
      <input id="password"  type="password" required className="form-input" 
      placeholder="Password"></input>
  </div>
  <button type="submit" className="btn btn-block">Submit</button>
  </form>
  
)
};

