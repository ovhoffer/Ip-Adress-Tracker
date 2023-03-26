export async function getAdress(ip) {
   const responce = await fetch(`
   https://geo.ipify.org/api/v2/country,city?apiKey=at_VH6hKgSjvnY7mP2koS8gOc1KKAVQ5&ipAddress=${ip}`)
     
   return await responce.json()
}