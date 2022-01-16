let weather = {
    apiKey: "3396ed7b89e138f7899a7a6fab93ac03",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const {name} = data
        const {icon, description} = data.weather[0]
        const {temp, humidity} = data.main
        const {speed} = data.wind
        const {country} = data.sys
        document.querySelector(".title").innerText = "Weather in " + name
        document.querySelector(".weather__icon").src = "https://openweathermap.org/img/wn/"+ icon +"@4x.png"
        document.querySelector(".temp__value").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind__speed").innerText = "Wind speed: " + speed + " km/h"
        document.querySelector(".temp__description").innerText = description
        document.querySelector(".location").innerText = name
        document.querySelector(".country").innerText = country
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search__bar").value)
    }
}

document.querySelector(".search__input i").addEventListener("click", function() {
    weather.search()
})

document.querySelector(".search__bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search()
    }
})


let suggestions = [
    "Los Angeles, United States",
    "New York, United States",
    "Las Vegas, United States",
    "Washington DC, United States",            
	"San Francisco, United States",
    "Miami, United States",
    "Compton, United States",
    "Texas city, United States",
    "Mahabad, Iran",
    "Tehran, Iran",
    "Urmia, Iran",
    "Athens, Greece",
    "Santorini, Greece",
    "Yerevan, Armenia",
    "Toronto, Canada",
    "Vancouver, Canada",
    "Montreal, Canada",
    "Paris, France",
    "Marseille, France",
    "Lyon, France",
    "Monaco",
    "Dubai, United Arab Emirates",
    "London, United Kingdom",
    "Manchester, United Kingdom",
    "Cambridge, United Kingdom",
    "Norwich, United Kingdom",
    "Rome, Italy",
    "Turin, Italy",
    "Venice, Italy",
    "Milan, Italy",
    "Madrid, Spain",
    "Barcelona, Spain",
    "Seville, Spain",
    "Brussels, Belgium",
    "Tel Aviv, Israel",
    "Jerusalem, Israel",
    "Haifa, Israel",
    "Sydney, Australia",
    "Melbourne, Australia",
    "Rio De Janeiro, Brazil",
    "São Paulo, Brazil",
    "Mexico City, Mexico",
    "Krakow, Poland",
    "Stockholm, Sweden",
    "Lisbon, Portugal",
    "Porto, Portugal",
    "Moscow, Russia",
    "St. Petersburg, Russia",
    "Helsinki, Finland",
    "New Delhi, India",
    "Kolkata, India",
    "Mumbai, India",
    "Berlin, Germany",
    "Johannesburg, South Africa",
    "Oslo, Norway",
    "Zurich, Switzerland",
    "Lugano, Switzerland",
    "Glasgow, Scotland",
    "Edinburgh, Scotland",
    "Dundee, Scotland",
    "Herning, Denmark",
    "Copenhagen, Denmark",
    "Aarhus, Denmark",
    "Reykjavik, Iceland",
    "Hafnarfjörður, Iceland",
    "Akureyri, Iceland",
    "Amsterdam, Netherlands",
    "Rotterdam, Netherlands",
    "Utrecht, Netherlands",
    "Viena, Austria",
    "Salzburg, Austria",
    "Innsbruck, Austria"
]

const searchInput = document.querySelector(".search__input")
const inputBox = searchInput.querySelector("input")
const suggestBox = document.querySelector(".autosuggest__box")

inputBox.onkeyup = (a) => {
    let userData = a.target.value
    let emptyArray = []
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
        })
        emptyArray = emptyArray.map((data) => {
            return data = '<li>'+ data +'</li>'
        })
        console.log(emptyArray)
        searchInput.classList.add("active")
        showSuggests(emptyArray)
        let allList = suggestBox.querySelectorAll("li")
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)")
        }
    }
    else {
        searchInput.classList.remove("active")
    }
}

function select(Element) {
    let selectUserData = Element.textContent
    inputBox.value = selectUserData

    searchInput.classList.remove("active")
}

function showSuggests(list) {
    let listData
    if(!list.length) {
        userValue = inputBox.value
        listData = '<li>'+ userValue +'</li>'
    }
    else {
        listData = list.join('')
    }
    suggestBox.innerHTML = listData
}