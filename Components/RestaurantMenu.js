import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {Menu_CDN_URL} from "../utils/constants";
import Shimmer from "./Shimmer";
import useGetRestaurantDetails from "../utils/useGetRestaurantDetails";
import { current } from "@reduxjs/toolkit";

const RestaurantMenu= ()=>{
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(-1);
    const [currentOpenIndex, setCurrentOpenIndex] = useState(-1);
    restaurantDetails= useGetRestaurantDetails(resId);
    if(restaurantDetails== null) return <Shimmer/>

    const resDetails = restaurantDetails?.cards[0]?.card.card.info;
    const itemCategories = restaurantDetails?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(mc=>{
        return mc.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    const handleCustodianClick = (index)=>{
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
                <div className="flex justify-between font-bold" onClick={(inex) => {handleCustodianClick(index)}}>
                    <h1>{ic.card.card.title} ({ic.card.card.itemCards.length})</h1>
                    <span className="font-XL cursor-pointer">{index == showIndex ? <label>-</label> : <label>+</label>} </span>
                </div>
                {index == showIndex && 
                (<div>
                    {ic.card.card.itemCards.map( (menu) => 
                        (                
                            <div key={menu.card.info.id} className="flex justify-between my-2 py-2 border-b-2 border-gray-300">
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