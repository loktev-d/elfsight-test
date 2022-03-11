import axios from "axios";

import config from "./config.json";

export async function fetchCharacters(query) {
  var urlParam = "";

  if (
    query &&
    !Object.values(query).every((value) => value === "" || value === 0)
  )
    urlParam =
      "?" +
      new URLSearchParams(
        Object.fromEntries(
          Object.entries(query).filter(
            ([key, value]) => value !== "" && value !== 0
          )
        )
      ).toString();

  return await axios.get(`${config.charactersApiUrl}${urlParam}`);
}
