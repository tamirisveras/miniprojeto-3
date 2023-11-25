// LastFmApi.js

import axios from "axios";

const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
const sharedSecret = process.env.REACT_APP_LASTFM_SHARED_SECRET;

const api = axios.create({
  baseURL: `http://www.last.fm/api/auth`,
});

export const getLastFmTopArtists = async () => {
  try {
    const response = await api.get(
        `/2.0/?method=artist.gettopalbums&artist=cher&api_key=${apiKey}&format=json `
    );
    return response.data.artists.artist;
  } catch (error) {
    throw error;
  }
};

export const searchLastFmArtist = async (artistName) => {
  try {
    const response = await api.get(
      `?method=artist.search&artist=${artistName}&api_key=${apiKey}&format=json`
    );
    return response.data.results.artistmatches.artist;
  } catch (error) {
    throw error;
  }
};
