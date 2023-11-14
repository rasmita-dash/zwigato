import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {GET_RESTAURANT_MENU} from "../utils/constants";

const RestaurantMenu= ()=>{
    const {resId} = useParams();
    console.log("restaurantID: "+ resId)

    const[restaurantDetails, setRestaurantDetails] = useState({});

    useEffect(()=>{
        getRestaurantDetails();
    }, [resId]);

    async function getRestaurantDetails(){
        const data = await fetch(GET_RESTAURANT_MENU + resId) ;
        const json = await data.json();
        console.log(json);
        setRestaurantDetails(json);
    }

    return (<>
    <h1>id: {resId}</h1>
    </>)
}

export default RestaurantMenu;