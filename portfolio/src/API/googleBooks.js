
import axios from 'axios';

const KEY = 'AIzaSyAy7v-jB64Q-n_xk_dZUnmH7gXt8kwwZts';

export default axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  params: {
    maxResults: 2,
    key: KEY
  }
});