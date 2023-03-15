
const inputArea = document.querySelector('input');
const inputButton = document.querySelector('.input button');
console.log(inputArea);

inputButton.addEventListener('click', getData);
inputArea.addEventListener('keydown', handleKey);

function checkIfValid(input) {
   const regEx = /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/;
   if (regEx.test(input) != true) {
      throw new Error('IP adress is not valid!')
   }
}

  async function getData() {
   const inputValue = inputArea.value;
   checkIfValid(inputValue);
   try {
      const response = await fetch(`
      https://geo.ipify.org/api/v2/country?apiKey=at_M30sTJJOWXvBoYS23rmIbtFbSiGjp&ipAddress=${inputValue}`);
      const data = await response.json();
      return data
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

export {handleKey, getData}

