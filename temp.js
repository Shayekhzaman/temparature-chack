

document.getElementById("search-btn").addEventListener("click",function(){
    const cityName=document.getElementById("cityName").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c4c68edf3147abbc9892326da35f3029`)
        .then(res => res.json())
        .then(data => {
            const temp=Math.round(data.main.temp);
            // console.log(temp);
            // // console.log(data.name);
            // // console.log(data.weather[0].main);
            // console.log(data);

            document.getElementById("city-name").innerText=data.name;
            document.getElementById("temp").innerText=temp;
            document.getElementById("weatherStatus").innerText=data.weather[0].main;
            
            document
            .getElementById('image')
            .setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

        })
})

