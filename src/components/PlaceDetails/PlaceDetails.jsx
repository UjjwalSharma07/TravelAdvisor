import React from 'react'
import './PlaceDetails.scss'
import {BsFillAwardFill} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'

const PlaceDetails = ({place}) => {
  return (
    <div className='placeDetails'>
      <div className="card">
        <img src={place.photo?place.photo.images.large.url:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={place.name} />
         <h2>{place?.name}</h2>
        <div className="deatils">
            <div className="row large">
              <span>Price</span>
              <span>{place?.price}</span>
            </div>
            <div className="row large">
              <span>Ranking</span>
              <span>{place?.ranking}</span>
            </div>
            <div className="row">
              <BsFillAwardFill/>
              <span>Certificate of Excellence</span>
            </div>
            
            {place?.awards?.map((award) => (
              <div  className="row">
                <img src={award.images.small} />
                <span>{award.display_name}</span>
              </div>
            ))}
            {place?.cuisine?.map(({ name }) => (
                <span className="row tag">
                  <span >{name} </span> 
                </span>
  
            ))}
           
              <div className="address">
                <FaMapMarkerAlt/>
                <span>{place?.address}</span>
              </div>
              <div className="address">
                <FaPhoneAlt/>
                <span>{place?.phone}</span>
              </div>
           
        </div>
      </div>
    </div>
  )
}

export default PlaceDetails
