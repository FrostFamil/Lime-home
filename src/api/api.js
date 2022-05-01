import axios from 'axios';

const API_BASE_URL = `https://api.limehome.com/properties/v1`;

const genericError = {
  status: 400,
  data: {
    info: {
      message: {
        title: 'Fatal Error',
        content: 'An error occured, please try again later',
      },
    },
  },
};

const getAllHouses = async () => {
  const url = `${API_BASE_URL}/public/properties/?cityId=32&adults=1`;
  const {data} = await axios
    .get(url)
    .catch((err) => {
      return err.response || genericError;
    });

   const {success, payload} = data;

  return {success, payload};
};

export default {
  getAllHouses
};