import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27729216-a46fdefa951b4c9ce7f14d513';
const reqParams = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  page: 1,
};

let lastPage = false;

async function fetchImgs(query = '', page = 1) {
  reqParams.q = query;
  reqParams.page = page;

  return axios
    .get(BASE_URL, { params: reqParams })
    .then(({ data }) => {
      lastPage =
        Math.ceil(data.totalHits / reqParams.per_page) === reqParams.page;
      return data.hits;
    })
    .catch(error => console.log('error', error));
}

function isLastPage() {
  return lastPage;
}

export { fetchImgs, isLastPage };
