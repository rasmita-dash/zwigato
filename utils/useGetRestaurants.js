import { useEffect, useState } from "react";
import {GET_RES_API_URL} from "../utils/constants";

const useGetRestaurants = ()=>{
    const [restaurants, setRestaurants] = useState([]);
    useEffect(()=>{
        getRestaurants()
    }, []);

    const getRestaurants = async() =>{
        const data = await fetch(GET_RES_API_URL);
        const json = await data.json();
        setRestaurants(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return restaurants;
}

export default useGetRestaurants;