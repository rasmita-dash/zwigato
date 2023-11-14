import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { GET_RES_API_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";

const Body = () => {
  //Local state variables
  //react re-renders the component when the state variable changes
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  function searchReastaurants() {
    const filteredRestaurants = restaurants?.filter((r) =>
      r.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const url=""+GET_RES_API_URL;
    const data = await fetch(url);
    const json = await data.json();
    const resList=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //Optional chaining
    setRestaurants(resList);
    setFilteredRestaurants(resList);
  }

  if (!filteredRestaurants) return null;
  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="filter-btn" onClick={()=>{searchReastaurants()}}>
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (r) => r.rating > 4
            );
            setFilteredRestaurants(filteredRestaurants);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res, index) => (
          <NavLink to={"/restaurant/" + res.info.id}>
            <RestaurantCard key={index} restaurant={res} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
