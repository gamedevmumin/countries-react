import { ColorModeScript, Center, Grid } from "@chakra-ui/react";
import CountryCard from "../components/countryCard";

const countriesGrid = () => {
  return (
    <Grid
      width="90%"
      padding="3em 0"
      templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
      gap="8em"
    >
      <CountryCard
        country={{
          flag: "https://restcountries.eu/data/usa.svg",
          name: "Afghanistan",
          population: "100 000 000",
          region: "Asia",
          capital: "Kabul",
        }}
      />
      <CountryCard
        country={{
          flag: "https://restcountries.eu/data/usa.svg",
          name: "Afghanistan",
        }}
      />
      <CountryCard
        country={{
          flag: "https://restcountries.eu/data/afg.svg",
          name: "Afghanistan",
        }}
      />
      <CountryCard
        country={{
          flag: "https://restcountries.eu/data/afg.svg",
          name: "Afghanistan",
        }}
      />
      <CountryCard
        country={{
          flag: "https://restcountries.eu/data/afg.svg",
          name: "Afghanistan",
        }}
      />
    </Grid>
  );
};

export default countriesGrid;
