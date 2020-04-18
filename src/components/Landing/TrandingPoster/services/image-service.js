import axios from 'axios';

const URI = 'http://localhost:7000';
let cache;

/**
 * Fetches the remote service while caching the response
 *
 * @returns {Promise}
 */
export const fetchImageURL = async () => {
  if (!cache) {
    const { data } = await axios.get(URI);
    return data;
  }
  return cache;
};

export default {
	fetchImageURL,
};
