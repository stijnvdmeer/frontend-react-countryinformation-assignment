import './styles/App.css';
import WorldMap from './assets/world_map.png';

import CountryItem from "./components/CountryItem.jsx";

import sortListByPopulation from './helpers/SortListByPopulation.js';

import axios from 'axios';
import {useState} from "react";



function App() {
    const [countries, setcountries] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios.get('https://restcountries.com/v3.1/all', {});

            console.log(result);
            setcountries(result.data);
        } catch(err) {
            console.error(err);
        }
    }
    const sortListBy = (order) => {
        const newlist =  sortListByPopulation(countries, order);
        setcountries(newlist);
        console.log(newlist);
    }


    return (
        <>
            <nav>
                <button onClick={fetchData}>Fetch Data</button>
                <button onClick={() => sortListBy("ascending")}>Sort by Population Ascending</button>
                <button onClick={() => sortListBy("descending")}>Sort by Population Descending</button>
            </nav>

            <img id="map" src={WorldMap} alt="World Map"/>
            <ul>
                {
                    countries.map(country => {
                        // eslint-disable-next-line react/jsx-key
                      return <CountryItem
                          imgSrc={country.flags.png}
                          countryName={country.name.common}
                          population={country.population}
                          continent={country.continents[0]}
                      />
                    })
                }
            </ul>
        </>
    )

}

export default App
