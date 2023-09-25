import NavLinks from "./NavlinksP"
import { useState } from "react";


const Navbar = (parameters) => {
    const [user, setUser] = useState({ name: 'bob' });
    //₋Logout Function₋
    const logout =() => {
        return setUser(null);
    }    
    
    return (
        <nav className="nav-coontainer">
            <h5>CONTEXT API</h5>
            <NavLinks  user = {user} logout = {logout} />
        </nav>
    )
}

export default Navbar
