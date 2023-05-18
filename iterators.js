/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
    //console.log(logger[i]+1);
    array.forEach ((temprtre) => console.log (temprtre)); 

    }
    //  logger.forEach((number) =>`${number} is a `) ;

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
const  temperaturesinCelsius = toCelsius.map ((fahrenheit - 32 * (5/9)));
console.log (temperatures);
temperaturesinCelsius.push(temperaturesinCelsius);
};
return celsiusTemperatures;

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

function getTemperaturesAboveThreshold(temperatures, threshold) {
  return temperatures.filter(temp => temp > threshold);
}
       
      //  return exceedingTemperatures;
      
      return exceedingTemperatures;
      console.log(exceedingTemperatures);

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function getTemperaturesAboveThreshold(temperatures, threshold) {
  return temperatures.filter(temp => temp > threshold);
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function logHottestDays(temperatures, threshold) {
  const temperaturesFahrenheit = temperatures.map(convertToFahrenheit);
  const hotTemperaturesFahrenheit = getTemperaturesAboveThreshold(temperaturesFahrenheit, threshold);
  const hotTemperaturesCelsius = hotTemperaturesFahrenheit.map(convertToCelsius);
  hotTemperaturesCelsius.forEach(temp => console.log(temp));
}

  


  

/* Uncomment the following lines to test your code... */

 logger([1, 2, 3, 4, 5, 6, 7]);
 console.log(toCelsius([212, 122])); // should be: [100, 50];
 console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
 logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
