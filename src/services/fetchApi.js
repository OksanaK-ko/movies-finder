import axios from "axios";

axios.default.baseURL = "https://api.themoviedb.org/3/";
const key = "9b8af6d9c7bced78f94ac4d2985f0966";

export const fetch = (query) => {
  return axios
    .get(`?q=${query}&api_key=${key}`)
    .then((res) => res.data.results)
    .catch((error) => console.log(error));
};
