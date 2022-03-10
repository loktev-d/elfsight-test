import axios from "axios";

import config from "./config.json";

export async function fetchCharacters(query) {
  var urlParam = "";

  if (query && !Object.values(query).every((value) => value === ""))
    urlParam =
      "?" +
      new URLSearchParams(
        Object.fromEntries(
          Object.entries(query).filter(([key, value]) => value !== "")
        )
      ).toString();

  return await axios.get(`${config.charactersApiUrl}${urlParam}`);
}

export async function fetchData(url) {
  return await axios.get(url);
}
