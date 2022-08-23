export const getCelciusFromKelvin = (kelvin) => {
  return Math.round(kelvin - 273.15).toFixed(0);
};