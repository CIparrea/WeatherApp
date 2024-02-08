const apiKey = "d28537c1ffdbeb9ecb880a9d21ccb446";
const form = document.querySelector("form");
const initCity = document.querySelector("input")
let icon = document.querySelector(".farenheit");
let wallpaper = document.querySelector(".card");
let footer = document.querySelector(".bottom");

form.addEventListener("submit", handleSubmit);


function handleSubmit(e){
    e.preventDefault();
    const city = document.querySelector("input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


fetch(url)
  .then((res) => res.json())
  .then((res) => {
    const name = document.querySelector(".name");
    const description = document.querySelector(".description");
    const tempC = document.querySelector(".tempC");
    const tempF = document.querySelector(".tempF");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");
 
    let tempFRounded = Math.round(((Number(res.main.temp))*(9/5))+32);
    let tempCRounded = Math.round(res.main.temp)


    let splitCity = city.split(" ");
        let capSplitCity = splitCity.map(word => {
            return word[0].toUpperCase() + word.slice(1);
        })
        let cityNew = capSplitCity.join(" ");


    let condition = res.weather[0].main;
    let splitCondition = condition.split(" ");
        let capSplitCondition = splitCondition.map(word => {
            return word[0].toUpperCase() + word.slice(1);
        })
        let conditionNew = capSplitCondition.join(" ");


    name.textContent = cityNew;
    description.textContent = conditionNew;
    tempC.textContent = `${tempCRounded} °C`;
    tempF.textContent = `${tempFRounded}`;
    humidity.textContent = `Humidity: ${res.main.humidity} %`;
    wind.textContent = `Wind: ${res.wind.speed} km/h`;

    console.log(description.innerText);

    if(description.innerText=== "Clear"){
        wallpaper.style.background = `linear-gradient(rgb(65, 153, 253), rgb(255, 255, 255))`;
        icon.style.backgroundImage = `url("./sun.svg")`;

    }else if(description.innerText=== "Clouds"){
        wallpaper.style.background = `linear-gradient(rgb(65, 153, 253), rgb(255, 255, 255))`;
        icon.style.backgroundImage = `url("./cloud.svg")`;

    }else if(description.innerText=== "Drizzle"){
        wallpaper.style.background = `linear-gradient(rgb(59, 59, 59), rgb(255, 255, 255))`;
        icon.style.backgroundImage = `url("./shower.svg")`;

    }else if(description.innerText=== "Rain"){
        wallpaper.style.background = `linear-gradient(rgb(32, 32, 32), rgb(255, 255, 255))`;
        icon.style.backgroundImage = `url("./rain.svg")`;

    }else if(description.innerText=== "Thunderstorm"){
        wallpaper.style.background = `linear-gradient(rgb(5, 12, 30), rgb(255, 255, 255))`;
        icon.style.backgroundImage = `url("./thunderstorm.svg")`;

    }else if(description.innerText=== "Snow"){
        wallpaper.style.background = `linear-gradient(rgb(188, 239, 255), rgb(255, 255, 255))`;
        icon.style.backgroundImage = `url("./snow.svg")`;

    }else{
        wallpaper.style.background = `linear-gradient(rgb(65, 153, 253), rgb(255, 255, 255))`;
        icon.style.backgroundImage = `url("./clouds.svg")`;
      
    }
    initCity.value = "";
  });

  

}


