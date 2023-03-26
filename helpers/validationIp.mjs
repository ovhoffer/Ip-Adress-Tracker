
export function checkIfValid(input) {
   const regEx = /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/;

   return regEx.test(input)
}
 
