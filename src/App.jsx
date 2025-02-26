import './styles/App.css';
import WorldMap from './assets/world_map.png';

// import CountryItem from "./components/CountryItem.jsx";

// import sortListByPopulation from './helpers/SortListByPopulation.js';

import axios from 'axios';
import {useState, useEffect} from "react";
import CountryPanel from "./components/CountryPanel.jsx";



function App() {
    const [countries, setcountries] = useState([]);
    const [searchInput, setSearchInput] = useState('nederland');

    const fetchData = async () => {
        try {
            // const result = await axios.get('https://restcountries.com/v3.1/all', {});
            const result = await axios.get(`https://restcountries.com/v3.1/name/${searchInput}`);

            setcountries(result.data);
        } catch(err) {
            console.error(err);
        }
    }

    // Fetch Data Only once on page load
    useEffect(() => {
        fetchData();
    }, []);

    // const sortListBy = (order) => {
    //     const newlist =  sortListByPopulation(countries, order);
    //     setcountries(newlist);
    //     console.log(newlist);
    // }


    return (
        <>
            <nav>
                {/*<button onClick={() => fetchData}>Fetch Data</button>*/}
                {/*<button onClick={() => sortListBy("ascending")}>Sort by Population Ascending</button>*/}
                {/*<button onClick={() => sortListBy("descending")}>Sort by Population Descending</button>*/}

            </nav>

            <img id="map" src={WorldMap} alt="World Map"/>
            <form>
                <input type="text" id="searchBar" placeholder="Search by name..." onChange={(e) => setSearchInput(e.target.value)} />
                <input type="submit" value="Search" onClick={() => fetchData()} />
            </form>
            {/* Code for assignment one */}
            {/*<ul>*/}
            {/*    {*/}
            {/*        countries.map(country => {*/}
            {/*          return <CountryItem*/}
            {/*              imgSrc={country.flags.png}*/}
            {/*              countryName={country.name.common}*/}
            {/*              population={country.population}*/}
            {/*              continent={country.continents[0]}*/}
            {/*          />*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}

            {/* Code for assignment two */}
            {
                countries.map((country, index) => {
                    // eslint-disable-next-line react/jsx-key
                    return <CountryPanel data={country} key={index} />
                })
            }
        </>
    )

}

export default App
