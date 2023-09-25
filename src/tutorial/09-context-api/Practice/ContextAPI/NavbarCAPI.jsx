import NavLinks from "./NavLinksCAPI"
import { useState } from "react"
import { createContext } from "react"
import { useContext } from "react"


//₋1st-NavbarContext(any) = React.CreateContext()₋
// export; 
export const NavbarContext = createContext();


//₋2nd- CreateContext() Returns (x2) Components₋
// ● Provider - Wraps return in Parent Container  
// ● Consumer - Consumes Context Values (replaced by Custom Hook) 



// export 
//₋3rd- Custom Hook₋
export const useAppContext = () => useContext(NavbarContext);


const Navbar = (parameters) => {
    const [user, seUser] = useState({ name: 'bob' })
    const logout = () => {
        seUser(null)
    }
    return (
        <NavbarContext.Provider value={{ user, logout }}>  
            <nav className="nav-container">
                <h5>CONTEXT API</h5>
                <NavLinks />
            </nav> 
        </NavbarContext.Provider>
    )
}
export default Navbar