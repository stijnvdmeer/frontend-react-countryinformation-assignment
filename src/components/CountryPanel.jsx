/* eslint-disable react/prop-types */

import '../styles/countrypanel.css';
import RoundByMillion from "../helpers/RoundByMillion.js";

export default function CountryPanel({data}) {
    return (
        <div className="panel">
            <img src={data.flags.png} alt={data.flags.alt} />
            <h3>{data.name.common}</h3>
            <p>{data.name.common} is situated in {data.subregion} and the capital is {data.capital[0]}. <br />
                It has a population of {RoundByMillion(data.population)} million people and it borders with {data.borders.length} neighbouring countries. <br />
                Websites can be found on {data.tld} domains</p>
        </div>
    )
}