import React, { useState } from "react";
import "./Header.scss";
import { BiSearch } from "react-icons/bi";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({setCoordinates}) => {
  const [autoComplete, setAutoComplete] = useState(null)
  const onLoad =(autoC)=>{
    setAutoComplete(autoC)
  }
  const onPlaceChanged=()=>{
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lang = autoComplete.getPlace().geometry.location.lng();

    setCoordinates({lat,lang})


    
  }
  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">Travel Advisor</div>
        <div className="right">
          <span>Explore new places</span>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="searchBar" >
              <input type="text" placeholder="Search.." />
              <BiSearch className="icon" />
            </div>
          </Autocomplete>
        </div>
      </div>
    </div>
  );
};

export default Header;
