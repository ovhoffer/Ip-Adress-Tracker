export async function getAdress(ip) {
   const responce = await fetch(`
   https://geo.ipify.org/api/v2/country,city?apiKey=at_M30sTJJOWXvBoYS23rmIbtFbSiGjp&ipAddress=${ip}`)
     
   return await responce.json()
}