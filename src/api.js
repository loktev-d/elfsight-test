import axios from "axios";

import config from "./config.json";

export async function fetchCharacters(query) {
  var urlParam = "";

  if (query) urlParam = "?" + new URLSearchParams(query).toString();

  return await axios.get(`${config.charactersApiUrl}${urlParam}`);
}

export async function fetchData(url) {
  return await axios.get(url);
}
