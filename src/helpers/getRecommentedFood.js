import axios from 'axios';

export const getRecommentedFood = async () => {
  try {
    const { data } = await axios.get('/api/user/recommended-food');
    return data;
  } catch (err) {
    console.log(err);
  }
};
