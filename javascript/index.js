function updateTime() {
    //LA
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format(
        "h:mm:ss [<small>]A[</small>]"
        );
        
    }

    //Sydney
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
        let sydneyDateElement = sydneyElement.querySelector(".date");
        let sydneyTimeElement = sydneyElement.querySelector(".time");
        let sydneyTime = moment().tz("Australia/Sydney");

        sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
        sydneyTimeElement.innerHTML = sydneyTime.format(
        "h:mm:ss [<small>]A[</small>]"
        );
    }
    
}

function updateCity(event) {
    
    
    let localTimeZone = moment.tz.guess();
    let localTime = moment().tz(localTimeZone);
    let localCity = localTimeZone.replace("_", " ").split("/")[1];
    
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    
    citiesElement.innerHTML = `
        <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
        "A"
        )}</small></div>
        </div>

        <div class="city">
        <div>
        <h2>${localCity}</h2>
        <div class="date">${localTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${localTime.format("h:mm:ss")} <small>${localTime.format(
        "A"
        )}</small></div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);