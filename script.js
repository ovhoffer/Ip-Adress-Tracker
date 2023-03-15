import { getData, handleKey } from "./modules/user_input.js";



let information;
document.addEventListener('DOMContentLoaded', initApp);


function initApp() {
   getData().then(result => { 
      information = result ;
      console.log(information.location);
      updateData(information);
   })
   
 
}
 
let ipAdressInfo = document.querySelector('.item__ip .item__text p');
let locationInfo = document.querySelector('.item__location .item__text p');
let timezoneInfo = document.querySelector('.item__timezone .item__text p');
let ispInfo = document.querySelector('.item__isp .item__text p');
 
function updateData(data) {
      ipAdressInfo.innerHTML = data.ip;
      locationInfo.innerHTML = data.location.region + ', ' +  data.location.country ;
      timezoneInfo.innerHTML = 'UTC ' + data.location.timezone;
      ispInfo.innerHTML = data.isp;
   
}