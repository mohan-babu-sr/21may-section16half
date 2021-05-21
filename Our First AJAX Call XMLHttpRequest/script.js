'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData=function(country){
const request=new XMLHttpRequest();//to call AJAX
request.open('GET',`https://restcountries.eu/rest/v2/alpha/${country}`);
request.send();

request.addEventListener('load',function(){
    // console.log(this.responseText);

    const data=JSON.parse(this.responseText);
    console.log(data);

    const html=`
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population/100000000).toFixed(1)} People</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity=1;
});
};

getCountryData('ind');
getCountryData('usa');

//sometime order will be change from the request bcz we r using AJAX concept