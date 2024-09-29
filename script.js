let btn=document.getElementById("btn")
let desc=document.getElementById("desc")
let cityname=document.getElementById("cityname")
btn.onclick=()=>{
    let inputele=document.getElementById("inputele")   
    whether(`${inputele.value}`)
    inputele.value=""

}


var input = document.getElementById("inputele");


input.addEventListener("keydown", function(event) {
  
  if (event.key === "Enter") {
  
    let inputele=document.getElementById("inputele")   
    whether(`${inputele.value}`)
    inputele.value=""
  }
});

async function whether(a) {
 
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=ab2c6cdc257ebfa6d32104c5f5223cf3`)
    let res = await data
    let obj= await res.json()
    let celcius=document.getElementById("celcius")
    let image_whether=document.getElementById("image_whether")
    image_whether.src=`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
    celcius.innerText= `${Math.floor(obj.main.temp-273)} °C`
    desc.innerText=obj.weather[0].description
    cityname.innerText=obj.name

    
    
}
