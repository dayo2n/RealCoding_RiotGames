import { useEffect, useState } from "react";
import CityList from "../components/CityList";


function Cities(){

    const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities";
    
    const[cityState, setCityState] = useState([]);
    
    useEffect(() => {
        console.log("cities component mounted!");
        getCities();
      }, []); //  [] : 긴 배열을 처리

    async function getCities() {
        const cities = await fetch(API_URL).then((res) => res.json());
        console.log(cities);

        setCityState(cities);
    }


    return (
        <div>
            <div>
                <h1 className='subtitle'>Cities</h1>
                <p>{API_URL}</p>
            </div>
            <div>
                {/* {JSON.stringify(cityState)}; */}
            </div>


            <CityList cities={cityState} />
        </div>
    );
}

export default Cities;