export default function (list, order) {

    let newList = [...list];

    if(order === 'ascending') {
        newList.sort((a, b) => {
            if(a.population > b.population) return 1;
            if(a.population < b.population) return -1;
            return 0;
        })
    }
    if(order === 'descending') {
        newList.sort((a, b) => {
            if(a.population > b.population) return -1;
            if(a.population > b.population) return 1;
        })
    }

    return newList;
}