import React, { useCallback } from "react";
import {
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const filtering = ({ setSearchPhrase, setRegion }) => {
  const handleSearchPhraseChange = (event) =>
    setSearchPhrase(event.target.value);
  const handleRegionChange = (event) => setRegion(event.target.value);

  return (
    <Flex mt="2em" width="90%">
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          width="30%"
          placeholder="Search for a country..."
          onChange={useCallback(handleSearchPhraseChange)}
        />
      </InputGroup>
      <Select
        placeholder="Filter by region"
        width="20%"
        onChange={handleRegionChange}
      >
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </Flex>
  );
};

export default filtering;
