import React, { useEffect, useState, useMemo } from "react";
import {
  ColorModeScript,
  Center,
  Grid,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import CountryCard from "../components/countryCard";
import { getAllCountries, getCountriesByName } from "../endpoints/endpoints";

const countriesGrid = ({ searchPhrase, region }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const loadCountries = async () => {
    try {
      setIsLoading(true);
      const allCountries = (await getAllCountries()).data;
      if (region) {
        setCountries(
          allCountries.filter((country) => country.region === region)
        );
      } else setCountries(allCountries);
      setIsLoading(false);
    } catch {
      setCountries([]);
      setIsLoading(false);
      toast({
        title: "Something went wrong.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const loadCountriesBySearchPhrase = async () => {
    try {
      setIsLoading(true);
      const searchedCountries = (await getCountriesByName(searchPhrase)).data;
      setCountries(searchedCountries);
      if (region) {
        setCountries(
          searchedCountries.filter((country) => country.region === region)
        );
      } else setCountries(searchedCountries);
      setIsLoading(false);
    } catch {
      setCountries([]);
      setIsLoading(false);
      toast({
        title: "No such country.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (searchPhrase) loadCountriesBySearchPhrase();
    else loadCountries();
  }, [searchPhrase, region]);

  return !isLoading ? (
    <Grid
      width="90%"
      padding="3em 0"
      templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
      columnGap="8em"
      rowGap="4em"
    >
      {countries.map((country) => (
        <CountryCard country={country} />
      ))}
    </Grid>
  ) : (
    <Spinner />
  );
};

export default React.memo(countriesGrid);
