import UseContainer from "./UseContainer"

function NavLinks ({ user, logout }) {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <UseContainer {...{ user, logout }}/> 
    </div>
  )
}

export default NavLinks
