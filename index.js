const searchBtn = document.getElementById("search-btn");
const countryInput = document.getElementById("country-input");
const result = document.querySelector(".result");

searchBtn.addEventListener("click", getCountryInfo);

function getCountryInfo(country) {
  let countryName = countryInput.value.toLowerCase();
  let url = `https://restcountries.com/v3.1/name/${countryName}?fulltext=true`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
      <h2>${data[0].name.common}</h2>
      <h5>"${data[0].name.official}"</h5>
      
      <hr>
      <br>
      <h4>Capitol City</h4>
      <h5>${data[0].capital}</h5>
      
    <h4>Region</h4>
    <h5>${data[0].region}</h5>
    <h4>Subregion</h4>
    <h5>${data[0].subregion}</h5>
    <h4>Population</h4>
    <h5>${data[0].population}</h5>
        `;
    });
}
