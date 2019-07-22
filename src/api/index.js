import * as urls from './urls';
import axios from 'axios';

const searchGems = queryString => {
  const config = {
    params: {
      query: queryString
    }
  };
  return axios.get(urls.GEM_SEARCH, config);
};

export default {
  searchGems
};
