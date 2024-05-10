const TIME_CONVERSION = 3600
const CONVERSION_FACTOR = 12960
/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const quantities = {
  timeInSeconds: 3600, // seconds (1 hour)

  initialVelocity: 10000, // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  initialDistance: 0, // distance (km)

  initialFuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5, // fuel burn rate (kg/s)
}


//calculates remaining fuel
const calcRemainingFuel = (quantities) => {
  if (!quantities) throw new Error('"quantities" is required to calc remaining fuel')

  const {initialFuel, fuelBurnRate, timeInSeconds} = quantities
  if (!initialFuel) throw new Error('"initail fuel" is required to calc remaining fuel')
  if (!fuelBurnRate) throw new Error('"fuel burn rate" is required to calc remaining fuel')
  if (!timeInSeconds) throw new Error('"timeInSeconds" is required to calc remaining fuel')
  return initialFuel - (fuelBurnRate * timeInSeconds)
}
//calcultes new distance
const calcNewDistance = (quantities) => {
  if (!quantities) throw new Error('"quantities" is required to calc new distance')

  const {initialDistance, initialVelocity, timeInSeconds} = quantities

  if (initialDistance === null || initialDistance < 0) throw new Error('"distance" is required to calc new distance and cannot be less than zero')
  if (!initialVelocity) throw new Error('"initial velocity" is required to calc new distance')
  if (!timeInSeconds) throw new Error('"timeInSeconds" is required to calc new distance')

  return initialDistance + (initialVelocity * timeInSeconds / TIME_CONVERSION)
}
// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (quantities) => {

  if (!quantities) throw new Error('"quantities" is required to calc final velocity')
  const {initialVelocity, acceleration, timeInSeconds} = quantities
  if (!initialVelocity) throw new Error('"initial velocity" is required to calc final speed')
  if (!acceleration) throw new Error('"constant acceleration" is required to calc final speed')
  if (!timeInSeconds) throw new Error('"timeInSeconds" is required to calc final speed')
  const timeInHours = timeInSeconds  / TIME_CONVERSION
  const accelerationInKmPerHour = acceleration * CONVERSION_FACTOR
  return initialVelocity + (accelerationInKmPerHour * timeInHours)
}

const finalVelocity = calcNewVel(quantities) //calculates new velocity based on acceleration
const finalDistance = calcNewDistance(quantities) 
const remainingFuel = calcRemainingFuel(quantities)

console.log(`Corrected New Velocity: ${finalVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






