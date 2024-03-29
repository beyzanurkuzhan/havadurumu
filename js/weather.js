import fetchWeatherData from "./api.js";
import { updateUI } from "./ui.js";

// html elemanlarını seçme
const selectors = {
  city: document.querySelector(".weather-city"),
  datetime: document.querySelector(".weather-datetime"),
  weatherForecast: document.querySelector(".weather-forecast"),
  weatherTemperature: document.querySelector(".weather-temperature"),
  weatherIcon: document.querySelector(".weather-icon"),
  weatherMinMax: document.querySelector(".weather-minmax"),
  weatherRealfeel: document.querySelector(".weather-realfeel"),
  weatherHumidity: document.querySelector(".weather-humidity"),
  weatherWind: document.querySelector(".weather-wind"),
  weatherPressure: document.querySelector(".weather-pressure"),
  searchForm: document.querySelector(".weather-search"),
  searchInput: document.querySelector(".weather-searchform"),
  unitCelsius: document.querySelector(".weather-units-celsius"),
  unitFarenheit: document.querySelector(".weather-units-farenheit"),
  maxTemp: document.getElementById("maxTemp")
}

// varsayılan şehir ve birim değerlerini atadık
let currCity = "London";
let units = "metric";



//const cityImageMapping = {
//  konya: "url('https://www.expedia.es/Konya.dx8367?gallery-dialog=gallery-open')",
 // london: "url('https://content.api.news/v3/images/bin/33060fa32ef04156da26a03de4488878')",
//  amsterdam: "url('https://wise.com/imaginary-v2/8fab8a52eaaa8b543e70cafe5cf716d8.jpg?width=1200')",
 // tokyo: "url('https://img.piri.net/mnresize/900/-/resim/imagecrop/2023/01/17/11/54/resized_d9b02-8b17feafkapak2.jpg')",
 // istanbul: "url('https://www.propertyturkeyistanbul.com/Polar/Icerik/slider/Slider8f7e9164-4284-40c3-a2b4-dcc2567ae24bpropertyturkeyistanbul-slider-istanbul.jpg')",
 // oslo: "url('https://d1bvpoagx8hqbg.cloudfront.net/originals/norvece-asla-gitmemeniz-c-27-sebep-a1a8cdaf31e6655671d819ac02423bfc.jpg')",
 // brasil: "url('https://btsoekonomi.com/upload/urun1/21/images/btsoekonomi_bursa_brezilya_ticaret_gezi_trend_dergi__5_.jpg')",
  //santorini: "url('https://media.timeout.com/images/105738421/1372/772/image.webp')",
// Add more cities as needed };
// hava durumu verilerini apiden alma ve UI'yi güncellemek için asenkron fonksiyon
export async function getWeather() {
  const data = await fetchWeatherData(currCity, units);
  // console.log(data);
  updateUI(data, selectors);
 // updateBodyBackgroundImage();
}
// Ayrıca, arka plan Konumu vb. gibi diğer arka plan özelliklerini de ayarlamak isteyebilirsiniz.
//function updateBodyBackgroundImage() {
 // const backgroundImageURL = cityImageMapping[currCity];
 // document.body.style.backgroundImage = `${backgroundImageURL}` || "";
  //document.body.style.backgroundSize = "cover";
 // document.body.style.backgroundPosition = "left"; }



// arama kısmı için olay izleyicisi
selectors.searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  currCity = selectors.searchInput.value;
  //   console.log(currCity);
  await getWeather();
  selectors.searchInput.value = ""
})

selectors.unitCelsius.addEventListener("click", () => {
  if (units !== "metric") {
    units = "metric";
    getWeather();
  }
});

selectors.unitFarenheit.addEventListener("click", () => {
  if (units !== "imperial") {
    units = "imperial";
    getWeather()
  }
})

//document.body.addEventListener("load", async () => { await getWeather(); });