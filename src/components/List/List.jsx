import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import "./List.scss";

const List = ({places,selectOption,setSelectOption,rating,setRating}) => {
  console.log("List places",places);
 
  // const places = [
  //   { name: "cool place" },
  //   { name: "Best beer" },
  //   { name: "Best Streak" },
  //   { name: "cool place" },
  //   { name: "Best beer" },
  //   { name: "Best Streak" },
  //   { name: "cool place" },
  //   { name: "Best beer" },
  //   { name: "Best Streak" },
  // ];
  return (
    <div className="list">
      <div className="places">
        <h2>Restaurents,Hotels & Attractions around you</h2>
        <div className="filter">
          <div className="type">
            <span>Type</span>

            <div className="select">
              <select
                value={selectOption}
                onChange={(e) => setSelectOption(e.target.value)}
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </div>

          </div>
          <div className="type">
            <span>Rating</span>
            <div className="select">
              <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value={0}>All</option>
                <option value={3.0}>Above 3.0</option>
                <option value={4.0}>Above 4.0</option>
                <option value={4.5}>Above 4.5</option>
              </select>
            </div>
          </div>
        </div>
       
        {places.map((place, i) => (
          <PlaceDetails place={place} key={i} />
        ))}
      </div>
    </div>
  );
};

export default List;
