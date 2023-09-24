// <NavLinks/> Functional Component 

import { useState } from "react";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {

    return (
        <nav className="nav-container">
            <NavLinks/>
        </nav>
    )
}
