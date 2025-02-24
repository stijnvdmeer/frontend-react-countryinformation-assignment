export default function (continent) {

    if(continent === 'Asia') return "title-red";
    if(continent === 'Oceania') return "title-purple";
    if(continent === 'Europe') return "title-yellow";
    if(continent === 'Africa') return "title-blue";
    if(continent === 'South America') return "title-lightgreen";
    if(continent === 'North America') return "title-darkgreen";
    return "title-white";
}