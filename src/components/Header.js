import {
  Flex,
  Heading,
  Container,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  Image,
  Box,
  Link,
} from "@chakra-ui/react";
import PropTypes from "prop-types";


import coffeeSaverAppImage from "../images/coffeeSaverAppImage.png";

export default function Header({ title, introText, subtitle }) {
  const { toggleColorMode } = useColorMode();

  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("pink.50", "pink.800");
  const titleColor = useColorModeValue("brand.500", "brand.200");
  const btnBackground = useColorModeValue("brand.500", "pink.700");
  const btnText = useColorModeValue("brand.50", "brand.50");

  return (
    <div>
      <Flex bg={bgColor} justify="flex-end">
        <Button
          onClick={toggleColorMode}
          variant="outline"
          colorScheme="black"
          bg={btnBackground}
          textColor={btnText}
          fontSize={14}
          p={5}
          borderRadius="20"
          m="10"
          boxShadow="xl"
          _hover={{
            textDecoration: "none",
            fontWeight: "Light",
            backgroundColor: "brand.900",
          }}
        >
          Switch colour mode
        </Button>
      </Flex>
      <Flex
        align="center"
        bg={bgColor}
        justify="center"
        direction={{ base: "column", lg: "row" }}
        pb={55}
      >
        <Container
          maxW="container.md"
          h="100%"
          pb="5"
          pt="20"
          m="0"
          align="left"
          px="5"
        >
          <Text fontSize="md">{introText}</Text>
          <Heading
            maxWidth="100%"
            pt="2"
            fontWeight={900}
            fontSize={{ base: "50px", md: "50px", lg: "68px" }}
            textColor={titleColor}
          >
            {title}
          </Heading>
          <Heading fontWeight="bold" pt={10}>
            {subtitle}
          </Heading>
          <Link
            href="http://coffeesaverapp.surge.sh/"
            isExternal
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              variant="outline"
              colorScheme="black"
              bg={btnBackground}
              textColor={btnText}
              p={6}
              borderRadius={24}
              ml="0"
              mt="6"
              fontWeight={700}
              boxShadow="xl"
              _hover={{
                textDecoration: "none",
                fontWeight: "Light",
                backgroundColor: "brand.900",
              }}
            >
              Demo the Coffee Saver App
            </Button>
          </Link>
        </Container>
        <Box maxW="700px" mt="5" alignSelf="flex-end" pr="5">
          <Image
            mt="10"
            fit="contain"
            src={coffeeSaverAppImage}
            alt="coffee saver app image"
          />
        </Box>
      </Flex>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  introText: PropTypes.string,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  title: "Launching the Coffee Saver App",
  subtitle: "See the app in action",
  introText: "Developed by Shell",
};
