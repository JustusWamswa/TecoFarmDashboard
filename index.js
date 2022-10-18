document.addEventListener('DOMContentLoaded', () => {
    const openNav = document.getElementById('openNav');
    const closeNav = document.getElementById('closeNav');

    openNav.addEventListener('click', () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    });

    closeNav.addEventListener('click', () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    });

    // Declaring Variables
    const tempReading = document.querySelector('.temp-reading');
    const windReading = document.querySelector('.windReading');
    const humidityReading = document.querySelector('.humidityReading');
    const status = document.querySelector('.status');
    const circularResults = document.querySelector('.circularResults');

    // Fetching Weather Data
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=a9456f9b9c44839688b09d72859d42a2')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const { main } = data;
        const tempCelsius = Math.floor(main.temp - 273);
        tempReading.innerHTML = `${tempCelsius}°C`;
        windReading.innerHTML = `${data.wind.speed} km/h`;
        humidityReading.innerHTML = `${main.humidity} %`;

        if(tempCelsius >=10 && tempCelsius <= 30){
            status.innerHTML = "Excellent";
            circularResults.style.background = 'linear-gradient(65deg, rgba(48, 221, 67, 1) 0%, rgba(33, 210, 77, 1) 30%, rgba(57, 236, 147, 1) 100%);';
        }else{
            status.innerHTML = "Bad";
            circularResults.style.background = 'linear-gradient(65deg, rgb(210, 25, 25) 0%, rgb(207, 38, 64) 30%, rgb(214, 26, 32) 100%)';
        }
    })

})
    
