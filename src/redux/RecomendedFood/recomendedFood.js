import axios from 'axios';
axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

async function getRecomendedFood(token) {
  try {
    const res = await axios.get('/api/user/recommended-food', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default getRecomendedFood;