import Cookies from "js-cookie";

export const GET_CITIES = "GET_CITIES";
export const GET_CITY = "GET_CITY";
export const POST_CITY = "POST_CITY"

//////////////ACTIONS/////////////////////
export const getCities = (cities) =>{
    return{
        type: GET_CITIES,
        cities
    }
}

export const getCity = (city) => {
    return{
        type: GET_CITY,
        city
    }
}

export const postCity = (city) =>{
    return{
        type: POST_CITY,
        city
    }
}

////////////////////THUNKS/////////////////////////
export const fetchCities = () =>{
    return async (dispatch) => {
        const res = await fetch(`/api/map`);
        const data = await res.json()

        dispatch(getCities(data.cities))
        return data
    }

}

export const fetchCity = (id)  =>{
    return async (dispatch) =>{
        const res = await fetch (`/api/map/${id}`);
        const data = await res.json();
        dispatch(getCity(data.city))

    }
}

export const newCity = (city, state, lat, lng) =>{
    return async (dispatch) =>{
        const res = await fetch("/api/map/missing", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
          },
          body: JSON.stringify({ city, state, lat, lng }),
        });

       res.data = await res.json();

       if(res.ok){
           dispatch(postCity(res.data))
       }
       return res;
    }
}