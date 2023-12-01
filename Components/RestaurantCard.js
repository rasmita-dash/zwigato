import {Image_CDN_URL} from "../utils/constants";

const RestaurantCard=(props)=>{
    // const {restName,cuisine,rating} = props;//Destructuring
    const restaurant = props.restaurant.info;
    return(
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="restaurant logo" src={ Image_CDN_URL + restaurant.cloudinaryImageId }></img> 
            <h3 className="font-bold py-2">{restaurant.name}</h3>
            <h3>{restaurant.cuisines.join(", ")}</h3>
            <h3>{restaurant.avgRating}</h3>
        </div>
    )
}

export const WithLabel = (RestaurantCard) =>{
    return(props)=>{
        return (<><label className="absolute mx-2 px-2 bg-gray-300 rounded-lg">Featured</label>
            <RestaurantCard {...props}/>
            </>
        )
    }
}

export default RestaurantCard;