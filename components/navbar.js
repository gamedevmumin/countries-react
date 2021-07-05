import { Heading } from "@chakra-ui/react";
import {
  Flex,
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const navbarBackground = useColorModeValue("white", "darkBlue");

  return (
    <Flex
      width="100%"
      backgroundColor={navbarBackground}
      padding="1em"
      justifyContent="center"
    >
      <Flex
        width={{ lg: "90%", md: "90%", sm: "98%" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h2" size="lg">
          Where in the world?
        </Heading>
        <FormControl display="flex" alignItems="center" width="auto">
          <FormLabel fontSize="lg" htmlFor="dark-mode" mb="0">
            Dark mode
          </FormLabel>
          <Switch
            id="dark-mode"
            size="lg"
            spacing="1px"
            onChange={toggleColorMode}
            colorScheme="veryDarkBlue"
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Navbar;
