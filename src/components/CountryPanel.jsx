/* eslint-disable react/prop-types */

import '../styles/countrypanel.css';
import RoundByMillion from "../helpers/RoundByMillion.js";

export default function CountryPanel({country}) {
    return (
        <div className="panel">
            <img src={country.flags.png} alt={country.flags.alt} />
            <h3>{country.name.common}</h3>
            <p>{country.name.common} is situated in {country.subregion} and the capital is {country.capital[0]}. <br />
                It has a population of {RoundByMillion(country.population)} million people and it borders with {country.borders.length} neighbouring countries. <br />
                Websites can be found on {country.tld} domains</p>
        </div>
    )
}