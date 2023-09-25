import UserContainer from "./UserContainerP"




const NavLinks = ({user, logout}) => {
 return (
    <div className="nav-container">
        <ul>
            <li><a href="#">Testing</a></li>
            <li><a href="#">Testing</a></li>
        </ul>
        <UserContainer  user={user} logout={logout}/>
    </div>
 )   
}

export default NavLinks
