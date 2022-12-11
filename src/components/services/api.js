// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['x-api-key'] =
//   '30725538-60cf17fec7c19eff2b1d4a894';

// export const fetchImages = async searchName => {
//   const response = await axios.get(``, {
//     params: {
//       key: '29743747-4d974b8d370b5a5c48adadad9',
//       q: searchName,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: '12',
//       page: '1',
//     },
//   });
//   return response.data;
// };

function fetchImages(nextName, page) {}

const api = { fetchImages };

export default api;
