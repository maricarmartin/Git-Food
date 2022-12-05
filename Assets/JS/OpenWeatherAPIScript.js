const p = document.querySelector('#weatherBug p')

let openWeatherData = {}
let xhr = new XMLHttpRequest()
xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=fredericton&appid=6340cdd69e0374925a141cce8b65923d&units=metric`)
xhr.responseType = 'text'

xhr.addEventListener('load', function(){
    if (xhr.status === 200) {
        p.textContent = "loading... "
        openWeatherData = JSON.parse(xhr.responseText)
        populateWeatherInfo()
    } else {
        p.textContent = "error: " + xhr.status
    }
}, false)

xhr.send()

function populateWeatherInfo(){

    //location variable will have to equal something like userInput from a submission form for city//
    const location = openWeatherData.name
    const temp = Math.round(openWeatherData.main.temp)
    const wind = Math.round(openWeatherData.wind.speed)
    const time = new Date(openWeatherData.dt * 1000)
    let hrs = time.getHours()
    let mins = time.getMinutes()

    //Setting up clock//
    let timeString = ''
    //For minutes to display in :xy format//
    if (mins <10) {
        mins = `0${mins}`
    }
    //To properly display AM/PM//
    if (hrs === 12){
        timeString = `12:${mins} PM`
    } else if (hrs > 12) {
        timeString =`${hrs - 12}:${mins} PM`
    }else if (hrs === 0) {
        timeString = `12:${mins} AM`
    } else {
        timeString = `${hrs}:${mins} AM`
    }

    const str = `${location},<br>${temp}&#0176C,<br>wind: ${wind}km/h<br>${timeString}`
    p.innerHTML = str
}