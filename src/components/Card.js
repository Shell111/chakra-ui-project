import {
  Flex,
  Heading,
  Container,
  Text,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Card() {
  const bgColor = useColorModeValue("brand.200", "brand.900");
  const cardBg = useColorModeValue("brand.50", "pink.800");

  return (
    <Container maxW="full" bg={bgColor}>
      <Container maxW="1500px" pb={50}>
        <Heading
          pt="10"
          ml={8}
          fontSize={22}
          letterSpacing="1px"
          fontWeight="normal"
          align="left"
        >
          What our customers are saying...
        </Heading>
        <Flex
          justify="space-around"
          direction={{ base: "column-reverse", lg: "row" }}
        >
          <Box
            my="10"
            p="5"
            maxW="lg"
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="xl"
            align="left"
            mr={{ base: "0", lg: "10" }}
            bg={cardBg}
            borderColor="none"
          >
            <Flex>
              <Container alignSelf="flex-end">
                <Text fontSize="20" fontWeight={500}>
                  'Such an easy way to keep track of those small purchases I
                  decide to save instead of spending!'
                </Text>
                <Text fontSize="20" align="right">
                  ~ Sam
                </Text>
              </Container>
              <Image
                mt="2"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=30"
                alt="coffee saver app image"
                borderRadius="full"
                h="130px"
                w="190px"
              />
            </Flex>
          </Box>
          <Box
            my="10"
            p="5"
            maxW="lg"
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="xl"
            align="left"
            mr={{ base: "0", lg: "10" }}
            bg={cardBg}
            borderColor="none"
          >
            <Flex>
              <Container alignSelf="flex-end">
                <Text fontSize="20" fontWeight={500}>
                  'I've seriously saved about $1,500 last year, just from not
                  having that extra afternoon coffee!'
                </Text>
                <Text fontSize="20" align="right">
                  ~ Kim
                </Text>
              </Container>
              <Image
                mt="2"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="coffee saver app image"
                borderRadius="full"
                h="130px"
                w="190px"
              />
            </Flex>
          </Box>
          <Box
            my="10"
            p="5"
            maxW="lg"
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="xl"
            align="left"
            bg={cardBg}
            borderColor="none"
          >
            <Flex>
              <Container alignSelf="flex-end">
                <Text fontSize="20" fontWeight={500}>
                  'I didn't realise how much I could actually save by not buying
                  that one extra coffee each day!'
                </Text>
                <Text fontSize="20" align="right">
                  ~ Alex
                </Text>
              </Container>
              <Image
                mt="2"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="coffee saver app image"
                borderRadius="full"
                h="130px"
                w="190px"
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}
