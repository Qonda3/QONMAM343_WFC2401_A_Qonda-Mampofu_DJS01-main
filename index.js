/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const finalDistance = distance + (initialVelocity * timeInSeconds / 3600) //calcultes new distance
const remainingFuel = fuelBurnRate * timeInSeconds //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (velocity, acceleration, time) => { 
  return velocity + (acceleration * time)
}

const finalVelocity = calcNewVel(initialVelocity, acceleration, timeInSeconds) //calculates new velocity based on acceleration



console.log(`Corrected New Velocity: ${finalVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






