import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {Menu_CDN_URL} from "../utils/constants";
import Shimmer from "./Shimmer";
import useGetRestaurantDetails from "../utils/useGetRestaurantDetails";

const RestaurantMenu= ()=>{
    const {resId} = useParams();
    // const showItems = false
    const [showItems, setShowItems] = useState(false);
    restaurantDetails= useGetRestaurantDetails(resId);
    if(restaurantDetails== null) return <Shimmer/>

    const resDetails = restaurantDetails?.cards[0]?.card.card.info;
    const itemCategories = restaurantDetails?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(mc=>{
        return mc.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    const handleCustodianClick = ()=>{
        setShowItems(!showItems);
    }
    return (
    <div className="w-1/2 mx-auto">
        <div className="res-info">
            <h1>{resDetails.name}</h1>
        </div>
        {/* menu category */}
        {itemCategories.map((ic, index) => (
            <div className="bg-gray-200 my-3 p-4">
                <div key={index} className="flex justify-between font-bold" onClick={handleCustodianClick}>
                    <h1>{ic.card.card.title} ({ic.card.card.itemCards.length})</h1>
                    <span className="font-XL cursor-pointer">{showItems ? <label>-</label> : <label>+</label>} </span>
                </div>
                {showItems && 
                (<div>
                    {ic.card.card.itemCards.map( (menu) => 
                        (                
                            <div key={menu.card.info.id} className="flex justify-between my-2 py-2">
                                <div className="w-3/4">
                                    <div className="flex justify-between mr-4 font-semibold">
                                        <label>{menu.card.info.name}</label>
                                        <label>Rs.{menu.card.info.price? menu.card.info.price/100: menu.card.info.defaultPrice/100}</label>
                                    </div>
                                    <p>{menu.card.info.description}</p>
                                </div>
                                <div className="w-1/4">
                                    <img alt={menu.card.info.name} className="w-5/6 rounded-lg" loading="lazy"
                                    src={Menu_CDN_URL + menu.card.info.imageId}></img>
                                </div>
                            </div>
                        ))
                    }
                </div>)
                }
            </div>
        ))
    }

    </div>)
}

export default RestaurantMenu;