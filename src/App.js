import "./App.css";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import { getPlaceData } from "./api/travelAdviorApi";
import { useEffect, useState } from "react";

function App() {
  
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [selectOption, setSelectOption] = useState("restaurants");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [rating, setRating] = useState("");

  // console.log(bounds);
  // this will run only once and show u the location where u r
  useEffect(()=>{

    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude});
    })
     
  },[]);

  useEffect(()=>{

    const FilteredPlaces = places.filter((place)=>Number(place.rating)>(rating));
    console.log("rating places", FilteredPlaces)
    setFilteredPlaces(FilteredPlaces);
    
  },[rating])

  // this will run when u drag ur mouse and show the location
  useEffect(() => {
    // console.log(coordinates,bounds);
     
        getPlaceData(selectOption,bounds).then((data) => {
          console.log("data" ,data);
          setPlaces(data.data);
          setFilteredPlaces([])
        });  
      
        
    }, [selectOption,coordinates,bounds]);
  console.log("places",places)   

  return (
    <div className="App">
      <Header setCoordinates={setCoordinates} />
      <Wrapper
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places={filteredPlaces.length ? filteredPlaces : places}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
        rating={rating}
        setRating={setRating}
      />
    </div>
  );
}

export default App;
