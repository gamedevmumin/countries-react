import axios from "axios";

export const getAllCountries = async () =>
  axios.get(
    "https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital"
  );

export const getCountriesByName = async (name) =>
  axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
