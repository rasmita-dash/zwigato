import { useState, useEffect } from "react";
import {GET_RESTAURANT_MENU} from "../utils/constants";

const useGetRestaurantDetails = (resId)=>{
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    useEffect(()=>{
        getRestaurantDetails()
    }, []);

    const getRestaurantDetails = async () =>{
        const data= await fetch (GET_RESTAURANT_MENU + resId);
        const json= await data.json();
        setRestaurantDetails(json.data);
    }

    return restaurantDetails;
}

export default useGetRestaurantDetails;