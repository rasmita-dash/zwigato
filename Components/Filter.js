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
        <button className="filter-btn" onClick={searchReastaurants()}>
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (r) => r.rating > 4.5
            );

            setRestaurants(filteredRestaurants);
          }}>
          Top Rated Restaurants
        </button>
      </div>