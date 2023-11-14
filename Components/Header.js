import { useState } from "react";
import {Logo_URL} from "../utils/constants";
import { NavLink } from "react-router-dom";

const Header=()=>{
    const [btnName, setBtnName]=useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About Us</NavLink></li>
                    <li><NavLink to="contact">Contact Us</NavLink></li>
                    <li><NavLink to="cart">Cart</NavLink></li>
                    <button className="login" onClick={ ()=> {setBtnName(btnName == "Login"?"Logout": "Login")}}> {btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;