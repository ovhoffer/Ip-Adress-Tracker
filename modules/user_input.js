const inputArea = document.querySelector('input');
const inputButton = document.querySelector('.input button');
console.log(inputArea);

function checkIfValid(input) {
   const regEx = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
   if (regEx.test(input) != true) {
      throw new Error('IP adress is not valid!')
   }
}

inputButton.addEventListener('click', getData);
inputArea.addEventListener('keydown', handleKey);

// это убрать в общий жабаскрипт, там сделать инициализацию и очистку в конце

async function getData() {
   const inputValue = inputArea.value;
   checkIfValid(inputValue);
   try {
      const response = await fetch(`
      https://geo.ipify.org/api/v2/country?apiKey=at_M30sTJJOWXvBoYS23rmIbtFbSiGjp&ipAddress=${inputValue}`);
      const data = await response.json();
      console.log(data)
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


