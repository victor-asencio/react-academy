import axios from 'axios';

const KEY = 'AIzaSyCRIecaxGMeew1eVescs5gOwQ21CR7NmQw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})