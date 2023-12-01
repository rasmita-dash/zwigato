import RestaurantCard, {WithLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { GET_RES_API_URL } from "../utils/constants"
import useGetRestaurants from "../utils/useGetRestaurants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const OpenRestaurant= WithLabel(RestaurantCard);
  const TopRatedRestaurant = WithLabel(RestaurantCard);
  function searchReastaurants() {
    const filteredRestaurants = restaurants?.filter((r) =>
      r.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    getRestaurants();
    // const timer = setInterval(()=>{console.log("setInterval")}, 1000);
    // return() => {
    //     clearInterval(timer);
    // }
  }, []);

  async function getRestaurants() {
    const url= GET_RES_API_URL;
    const data = await fetch(url);
    const json = await data.json();
    const resList=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //Optional chaining
    setRestaurants(resList);
    setFilteredRestaurants(resList);
  }

  // const restaurantList = useGetRestaurants();
  // console.log("restaurantList: " + restaurantList);
  // setFilteredRestaurants(restaurantList);

  const userContext = useContext(UserContext);
  function handleUserNameChange(userName){
      userContext.setLoggedInUser({loggedInUser: {
        userName: userName
    }})
  }
  
  return (<div className="body">
      <div className="flex">
        <input
          type="text"
          className="m-4 px-4 py-2 bg-gray-70 bg-solid border-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="m-4 px-4 py-2 bg-blue-50 rounded-lg" onClick={()=>{searchReastaurants()}}>
          Search
        </button>
        <button
          className="m-4 px-4 py-2 bg-green-50 rounded-lg"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (r) => r.rating > 4
            );
            setFilteredRestaurants(filteredRestaurants);
          }}>
          Top Rated Restaurants
        </button>
        UserName: 
        <input type="text" className="m-4 p-2 border-black" 
        value={userContext.loggedInUser.loggedInUser.userName} 
        onChange={(e)=>handleUserNameChange(e.target.value)} />
      </div>
      {filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
      <div className="flex flex-wrap">
        {filteredRestaurants.map((res, index) => (
          <NavLink to={"/restaurant/" + res.info.id} key={index}>
            {/* <RestaurantCard key={index} restaurant={res} /> */}
            {res.info.avgRating >= 4.5 ? <TopRatedRestaurant restaurant={res} />:
            <RestaurantCard key={index} restaurant={res} />}
          </NavLink>
        ))}
      </div>
  )
        }
        </div>
  )
};

export default Body;
