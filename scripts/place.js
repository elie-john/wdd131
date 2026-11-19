
// Get the current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Get the last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;


// Static weather values
const temperature = 18;
const windSpeed = 12;


// Wind Chill Calculation Function
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}


// Check if wind chill conditions are met
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}


// Display weather information
document.querySelector("#temperature").textContent = temperature;

document.querySelector("#wind-speed").textContent = windSpeed;

document.querySelector("#wind-chill").textContent = windChill;
