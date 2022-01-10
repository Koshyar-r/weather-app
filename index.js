

const apiKey = "3396ed7b89e138f7899a7a6fab93ac03"

function GetWeather(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(api)
    .then(function(response) {
        let data = response.json()
        return data
    })
}

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
    "Lugano, Switzerland"
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