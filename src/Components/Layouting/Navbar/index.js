import React from "react";
import {NavLink} from 'react-router-dom'

import "./index.css";
import HeaderLogo from "./Logo";
import Login from "../../Login/Login";
import Searchbar from "../../Assets/Searchbar";
import SocialMedia from "../Footer/SocialMedia";


export default function Navbar() {
    return (
        <div className="HeaderNavbar">
            <div className="HeaderTopSide">
                <HeaderLogo />
                {/**Searchbar */}
                <Searchbar />
                <SocialMedia />

                <NavLink to='login'>
                    <Login />
                </NavLink>
            </div>
            {/* <div className='Line'></div> */}
        </div>
    );
}
