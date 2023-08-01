
const loadCountries= ()=>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data=>displayCountries(data))
}
const displayCountries = countrie => {
    const countries = countrie.slice(0, 22);
    const filterCountry = countrie.filter(function (ele) {
        return ele.region == "Africa";
    })
    console.log(filterCountry);
    const countrieHTML = filterCountry.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    // console.log(countrie);
    // console.log(countrieHTML[0]);
    container.innerHTML = countrieHTML.join(' ');
    
}
// option 3
const getCountryHTML = ({name, flags, area, region}) =>{
    return `
        <div class="country">
            <img src="${flags.png}">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Continet: ${region}</p>
            
        </div>
    `
}

loadCountries();