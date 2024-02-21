import axios from "axios";

export const backendpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopalbums = async () => {
  try {
    const res = await axios.get(`${backendpoint}/albums/top`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchNewalbums = async () => {
  try {
    const res = await axios.get(`${backendpoint}/albums/new`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${backendpoint}/songs`);
    return res.data;
  } catch (e) {
    console.log("failed in songs");
  }
};
export const fetchFilters = async () => {
  try {
    const res = await axios.get(`${backendpoint}/genres`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
