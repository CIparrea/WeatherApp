const apiKey = "d28537c1ffdbeb9ecb880a9d21ccb446";
const form = document.querySelector("form");
const initCity = document.querySelector("input")


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
 
    let tempFRounded = Math.round(((Number(res.main.temp))*(5/9))+32);
    let tempCRounded = Math.round(res.main.temp)


    let splitCity = city.split(" ");
        let capSplitCity = splitCity.map(word => {
            return word[0].toUpperCase() + word.slice(1);
        })
        let cityNew = capSplitCity.join(" ");


    let condition = res.weather[0].description;
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
  });

}


