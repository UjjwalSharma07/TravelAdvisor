
import React from 'react'
import List from '../List/List'
import Map from '../Map/Map'

import "./Wrapper.scss"

const Wrapper = ({setCoordinates,setBounds,coordinates,places ,selectOption,setSelectOption,rating,setRating}) => {
  return (
    <div className='wrapper'>

      <div className='list'>
        <List places={places}  
        selectOption={selectOption}
        setSelectOption={setSelectOption}
        rating={rating}
        setRating={setRating} 
        />
      </div>

      <div className="map">
        <Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={places}
        />
      </div>
    </div>
  )
}

export default Wrapper
