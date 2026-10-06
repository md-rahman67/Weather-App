let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let btn = document.querySelector("button");
let inpt = document.querySelector("#inpt");
let img = document.querySelector("img");
let iconChng = img.getAttribute("src");
let windSpeed = document.querySelector(".ws");
let wsTag = document.querySelector(".wsTag");
let hCode = document.querySelector(".h-code");
let hTag = document.querySelector(".h-tag");

let lat;
let lang;
let loc;

async function getLongLat(){
    loc = inpt.value;
    try{
        let url = `https://geocoding-api.open-meteo.com/v1/search?name=${loc}&count=1`;
        let res = await axios.get(url);
        lat = res.data.results[0].latitude;
        lang = res.data.results[0].longitude;
        console.log( res.data.results[0].latitude);
        console.log( res.data.results[0].longitude);
        console.log( res.data.results);
    } catch(err){
        console.log("ERROR: ", err);
    }
}




async function getMousam(){
    await getLongLat();

    let url2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lang}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&wind_speed_unit=kmh`

    try{
        let res = await axios.get(url2);
        
        h1.innerText = `${res.data.current.temperature_2m}°C`;
        p.innerText = loc

        let wind = res.data.current.wind_speed_10m;
        windSpeed.innerText = `${wind}km/h`;
        wsTag.innerText = `Wind Speed`;

        hCode.innerText = `${res.data.current.relative_humidity_2m}%`;
        hTag.innerText = `Humidity`;
        console.log(res.data.current);
        
    } catch(err){
        console.log("ERROR: ", err);
    }
}

btn.addEventListener("click", getMousam)

