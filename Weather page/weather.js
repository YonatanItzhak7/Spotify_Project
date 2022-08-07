
async function getApiData(){
  return await fetch("https://api.openweathermap.org/data/2.5/weather?q=lod&appid=1d250ee10c9d77921eb179adf6057b22")
	.then(response => response.json())
}
getApiData().then(res=>{console.log(res)})

function printTimeToScreen(){
  getApiData().then((res)=>{
	  document.getElementById("weather").innerHTML += `<h5>${res.name}<br><i class="bi bi-brightness-high"></i> ${res.weather[0].description}</h5>`
  })
}
printTimeToScreen()
