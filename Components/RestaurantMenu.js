import { useParams } from "react-router-dom";
import {useState} from "react";

import Shimmer from "./Shimmer";
import useGetRestaurantDetails from "../utils/useGetRestaurantDetails";
import ItemCategory from "./ItemCategory";

const RestaurantMenu= ()=>{
    const [showIndex, setShowIndex] = useState(-1);
    const [currentOpenIndex, setCurrentOpenIndex] = useState(-1);
    const {resId} = useParams();
    restaurantDetails= useGetRestaurantDetails(resId);
    if(restaurantDetails== null) return <Shimmer/>
    
    const resDetails = restaurantDetails?.cards[0]?.card.card.info;
    const itemCategories = restaurantDetails?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(mc=>{
        return mc.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    const handleCategoryCustodianClick = (index)=>{
        if(index == currentOpenIndex){
            setShowIndex(-1);
            setCurrentOpenIndex(-1);
        }else{
            setCurrentOpenIndex(index);
            setShowIndex(index);
        }
    }
    return (
    <div className="w-1/2 mx-auto">
        <div className="res-info">
            <h1>{resDetails.name}</h1>
        </div>
        {/* menu category */}
        {itemCategories.map((ic, index) => (
            <div key={index} className="bg-gray-200 my-3 p-4">
                <ItemCategory itemCategory={ic} 
                showItems = {index == showIndex}
                handleCustodianClick={()=> handleCategoryCustodianClick(index)}/>
            </div>
        ))
    }

    </div>)
}

export default RestaurantMenu;