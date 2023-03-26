
import {checkIfValid, addTileLayer, getAdress, addOffset } from "./helpers/index.mjs";



const inputArea = document.querySelector('input');
const inputButton = document.querySelector('button');
const ipAdressInfo = document.querySelector('.item__ip .item__text p');
const locationInfo = document.querySelector('.item__location .item__text p');
const timezoneInfo = document.querySelector('.item__timezone .item__text p');
const ispInfo = document.querySelector('.item__isp .item__text p');
const mapArea = document.querySelector('.page__map');
const modalIp = document.querySelector('.page__invalid');
const modalServer = document.querySelector('.page__server-error');
const modalServerButton = document.querySelector('.page__server-error button')
const modalIpButton = document.querySelector('.page__invalid button');




document.addEventListener('DOMContentLoaded', () => {
   getAdress('192.234.231.102').then(data => updateData(data));
   
})

inputButton.addEventListener('click', getData);
inputArea.addEventListener('keydown', handleKey);
modalIpButton.addEventListener('click', hideAndSetIp);
modalServerButton.addEventListener('click', hideAndSetServer)



function hideAndSetIp() {
   if (modalIp.style.opacity == 1) {
      modalIp.style.pointerEvents = 'none';
      modalIp.style.opacity = 0;
     
   }
   else if (modalIp.style.opacity == 0) {
      modalIp.style.pointerEvents = 'all';
      modalIp.style.opacity = 1;
   
   }
}

 
function hideAndSetServer() {
   if (modalServer.style.opacity == 1) {
      modalServer.style.pointerEvents = 'none';
      modalServer.style.opacity = 0;
     
   }
   else if (modalServer.style.opacity == 0) {
      modalServer.style.pointerEvents = 'all';
      modalServer.style.opacity = 1;
   
   }
}



function getData() {
   let inputValue = inputArea.value;
   console.log(inputValue);
   let res = checkIfValid(`${inputValue}`);
   console.log(res)
   if (res == false) {
      hideAndSetIp();
      inputArea.value = '';
      throw new Error('IP adress is invalid'); 
   }
   else if (res == true) {
      try {
         getAdress(inputValue)
            .then(data => updateData(data))
            .then(console.log)
         }
      catch (error) {
         hideAndSetServer();
         throw new Error('Problems with server. Try later!');
         }
   }
}  


function handleKey(e) {
if (e.key === 'Enter') {
   getData();
}
}


function updateData(mapData) {
   const { lat, lng, country, region, timezone } = mapData.location;
      ipAdressInfo.innerHTML = mapData.ip;
      locationInfo.innerHTML = region + ', ' +  country ;
      timezoneInfo.innerHTML = 'UTC ' + timezone;
   ispInfo.innerHTML = mapData.isp;
   map.setView([lat, lng])
   L.marker([lat, lng], { icon: mapIcon }).addTo(map)
   if (matchMedia("(max-width: 950px)").matches) {
      
   addOffset(map, 0.2);
   }
   else {
      addOffset(map, -0.1);
   }
}


const map = L.map(mapArea, {
   center: [51.505, -0.09],
   zoom: 13,
   
});

addTileLayer(map);
const mapIcon = L.icon({
   iconUrl: './images/icon-location.svg',
   iconSize: [40, 50]
})
L.marker([51.505, -0.09], {icon:mapIcon}).addTo(map);
