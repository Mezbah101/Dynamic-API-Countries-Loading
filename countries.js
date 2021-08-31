const getCountries= () => {
fetch ('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then (data => displayCountries(data))
}

getCountries();

const displayCountries = countries => {

countries.forEach(country => {

//   console.log(country);
  const div =   document.createElement ("div");
  div.classList.add ("country")

  div.innerHTML = `
  <h3> ${country.name} </h3>
  <p> <strong> Capital: </strong> ${country.capital} </p>
  <button class ="button"  onclick = "loadCountries('${country.name}')"> See Details </button>
  ` ;

document.getElementById("countries-container").appendChild(div);
});

}


const loadCountries = name => {

const url = ` https://restcountries.eu/rest/v2/name/${name}`;
fetch (url)
.then(res => res.json())
.then (data => displayCountryDetails(data[0]))

}

const displayCountryDetails = country => {
    console.log(country);
const countryDiv =  document.getElementById("country-detail");
countryDiv.innerHTML = `
<h5> ${country.name} </h5>
<p> Area: ${country.area} </p>
<p> Population ${country.population} </p>
<img width = "200px" src="${country.flag}" alt="">

`
document.getElementById("top-text").style.display= "none";




}
