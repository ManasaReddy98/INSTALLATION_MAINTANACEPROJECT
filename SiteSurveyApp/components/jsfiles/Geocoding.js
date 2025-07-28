import axios from 'axios';

export const getAddressFromCoordinates = async (latitude, longitude, apiKey) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
    );
    console.log(response.data);

    if (response.data.results.length > 0) {
      const address = response.data.results[0].formatted_address;
      return address;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};
