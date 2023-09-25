
import NavLinks from "./NavLinks"
import { useState } from "react"

function Navbar () {
    const [user, setUser] = useState({ name: 'bob' });      
    const logout = () => {
        setUser(null);
    }
        return (
        <nav className="nav-container">
            <h5>CONTEXT API</h5>
            <NavLinks user = {user} logout = {logout} />
        </nav>
    )
}

export default Navbar 