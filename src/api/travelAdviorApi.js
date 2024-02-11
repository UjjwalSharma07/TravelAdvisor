import axios from "axios";

export const getPlaceData = async (selectOption,bounds) => {
  // console.log(bounds);
  if (!bounds) {
    return null;
  }

  const { north, south, east, west } = bounds.toJSON();
  try {
    console.log("select",selectOption);
    
    const { data } = await axios.get(`https://travel-advisor.p.rapidapi.com/${selectOption}/list-in-boundary`, {
      params: {
        bl_latitude: south,
        tr_latitude: north,
        bl_longitude: west,
        tr_longitude: east,

        open_now: "false",
        lunit: "km",
      },
      headers: {
        'X-RapidAPI-Key': '760091270bmsh24c0c26056cb9aep16f826jsnc79241ff4eb5',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }    
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

