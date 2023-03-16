import { checkIfValid } from "./modules/index.mjs";


const inputArea = document.querySelector('input');
const inputButton = document.querySelector('button');
let ipAdressInfo = document.querySelector('.item__ip .item__text p');
let locationInfo = document.querySelector('.item__location .item__text p');
let timezoneInfo = document.querySelector('.item__timezone .item__text p');
let ispInfo = document.querySelector('.item__isp .item__text p');
 

inputButton.addEventListener('click', getData);
inputArea.addEventListener('keydown', handleKey);


   function getData() {
   const inputValue = inputArea.value;
   checkIfValid(inputValue);
   try {
      fetch(`
      https://geo.ipify.org/api/v2/country?apiKey=at_M30sTJJOWXvBoYS23rmIbtFbSiGjp&ipAddress=${inputValue}`)
         .then(response => response.json())
         .then(data => updateData(data))
      
    }
    catch (error) {
     throw new Error('abon')
     }
    
   }  


 function handleKey(e) {
   if (e.key === 'Enter') {
      getData();
   }
  }
 

function updateData(mapData) {
      ipAdressInfo.innerHTML = mapData.ip;
      locationInfo.innerHTML = mapData.location.region + ', ' +  mapData.location.country ;
      timezoneInfo.innerHTML = 'UTC ' + mapData.location.timezone;
      ispInfo.innerHTML = mapData.isp;
   
}