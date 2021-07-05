import {
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

const countryCard = ({ country }) => {
  const {
    name,
    nativeName,
    region,
    subregion,
    capital,
    borders,
    topLevelDomain,
    currencies,
    languages,
    population,
    flag,
  } = country;

  const backgroundColor = useColorModeValue("veryLightGray", "darkBlue");

  return (
    <Flex flexDirection="column">
      <Image src={flag} alt="country flag" height="50%" />
      <Box backgroundColor={backgroundColor} padding="2em 1em">
        <Heading as="h2" size="md">
          {name}
        </Heading>
        <Text margin="0.5em 0">
          <b>Population: </b> {population}
        </Text>
        <Text margin="0.5em 0">
          <b>Region: </b> {region}
        </Text>
        <Text margin="0.5em 0">
          <b>Capital: </b> {capital}
        </Text>
      </Box>
    </Flex>
  );
};

export default countryCard;
