/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
    //console.log(logger[i]+1);
    const logger = [100,20,53,35,25];
    array.forEach((temprtre) => console.log {temperature})
        
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
const hottestDays = function (temperatures, threshhold)
       const exceedingTemperatures = temperatures.filter((temperature) => temperature > threshhold);
      //  return exceedingTemperatures;
      
      return exceedingTemperatures.;
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
const hottestDays = function (temperatures, threshhold) {
   
        const exceedingTemperatures = temperatures.filter((temperature) => temperature > threshold);
        return exceedingTemperatures;
        
      };
      const temperatureArray = [80, 85, 90, 95, 100];
const threshold = 90;
const exceedingTemperatures = hottestDays(temperatureArray, threshold);
console.log(exceedingTemperatures);

      
const hottestDays = function (temperatures, threshold) {
    const exceedingTemperatures = temperatures.filter((temperature) => temperature > threshold);
    const celsiusTemperatures = toCelsius(exceedingTemperatures);
  

  const temperatureArray = [80, 85, 90, 95, 100];
const threshold = 90;
logHottestDays(temperatureArray, threshold);
};
  

/* Uncomment the following lines to test your code... */

 logger([1, 2, 3, 4, 5, 6, 7]);
 console.log(toCelsius([212, 122])); // should be: [100, 50];
 console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
 logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
