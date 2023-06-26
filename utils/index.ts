export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '77ac1132ecmshc14cd2407d2f999p107896jsn93b700afcb41',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
   const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla?model=corolla', {
    headers: headers,

   });
   
   const result = await response.json();
   return result;
}