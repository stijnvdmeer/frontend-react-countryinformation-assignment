/* eslint-disable */
import '../styles/CountryItem.css'
import giveColorByContinent from "../helpers/giveColorByContinent.js";

export default function CountryItem({imgSrc, countryName, population, continent}) {

    return (
        <li>
            <img src={imgSrc} alt={"flag of " + countryName} />
            <span className={giveColorByContinent(continent)}>{countryName}</span>
            <p>has a population of {population} people</p>
        </li>
    )
}