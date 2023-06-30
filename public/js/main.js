// ############ DAYNAME , DAYANDMONTH ##################

const d = new Date();

// ################## DAYANDMONTH ##################
const monthNames = [
  "Jan",
  "Feb",
  "March",
  "AprIL",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const month = monthNames[d.getMonth()];
const day = d.getDate();
const dayAndMonth = `${day} ${month}`;

const dateMonth = document.querySelector(".dateAndMonth");
dateMonth.innerText = dayAndMonth;
// ################################## DONE ######################

// ################################## DAYNAME ######################

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var dayN = days[d.getDay()];

const dayName = document.querySelector(".day");
dayName.innerText = dayN;

// ################################## DONE ######################

// ################################## SELECTING AND GETTING CITY NAME & TEMP & ITS STATUS ######################
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const displayCity = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const icon = document.querySelector(".icon");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    displayCity.innerText = "Write name before search ...";
    icon.innerHTML = "";
    temp.innerText = "";
  } else {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ca3e70eca342e8e84a78c612cd30f3ea`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const countryName = data.sys.country;
      displayCity.innerText = `${cityVal},${countryName}`;
      temp.innerText = `${data.main.temp}°C`;

      const tempMood = data.weather[0].main;
      if (tempMood === "Clouds") {
        icon.innerHTML =
          "<i class='fa-solid fa-cloud fa-lg' style='color: #f5f5f5;'></i>";
      } else if (tempMood === "Rain") {
        icon.innerHTML =
          "<i class='fa-solid fa-cloud-rain fa-lg' style = 'color:#ddd;'></i>";
      } else if (tempMood === "Clear") {
        icon.innerHTML = "<i class='fa-solid fa-sun fa-lg'></i>";
      } else {
        icon.innerHTML = "<i class='fa-solid fa-sun fa-lg' ></i>";
      }
      console.log(tempMood);
    } catch {
      displayCity.innerText = "City Not Found !!!";
      icon.innerHTML = "";
      temp.innerText = "";
    }
  }
};
submitBtn.addEventListener("click", getInfo);
