/* eslint-disable */
import '../styles/CountryItem.css'

export default function CountryItem({imgSrc, countryName, population}) {

    return (
        <li>
            <img src={imgSrc} alt={"flag of " + countryName} />
            <span>{countryName}</span>
            <p>has a population of {population} people</p>
        </li>
    )
}