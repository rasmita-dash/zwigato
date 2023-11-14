import {Image_CDN_URL} from "../utils/constants";

const RestaurantCard=(props)=>{
    // const {restName,cuisine,rating} = props;//Destructuring
    const restaurant = props.restaurant.info;
    console.log(restaurant);
    return(
        <div className="res-card">
            <img className="res-logo" alt="restaurant logo" src={ Image_CDN_URL + restaurant.cloudinaryImageId }></img> 
            <h3>{restaurant.name}</h3>
            <h3>{restaurant.cuisines.join(", ")}</h3>
            <h3>{restaurant.avgRating}</h3>
        </div>
    )

}

export default RestaurantCard;