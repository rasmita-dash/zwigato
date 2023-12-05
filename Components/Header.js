import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import {Logo_URL} from "../utils/constants";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnName, setBtnName]=useState("Login");
    const onlineStatus = useGetOnlineStatus();
    const userContext = useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items);
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <img className="w-28" src={Logo_URL}></img>
            </div>
            <div>
                <ul className="flex">
                    <li className="px-4">Status: {onlineStatus? "Online": "Offline"} </li>
                    <li className="px-4"><NavLink to="/">Home</NavLink></li>
                    <li className="px-4"><NavLink to="about">About Us</NavLink></li>
                    <li className="px-4"><NavLink to="contact">Contact Us</NavLink></li>
                    <li className="px-4"><NavLink to="grocery">Grocery</NavLink></li>
                    <li className="px-4"><NavLink to="cart">Cart ({cartItems.length} items)</NavLink></li>
                    <button className="px-4" onClick={ ()=> {setBtnName(btnName == "Login"?"Logout": "Login")}}> {btnName}</button>
                    <li className="px-4">{userContext.loggedInUser.loggedInUser.userName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;