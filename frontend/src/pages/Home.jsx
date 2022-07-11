import React from "react";
import { Flex, Box, Heading, Text, HStack, Button } from "@chakra-ui/react";

import footballBackground from "assets/football.png";
import BaseCard from "components/BaseCard";
import ResultTable from "components/ResultTable";
import ToggleColor from "components/ToggleColor";

const Home = () => {
  return (
    <Flex
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10vw"}
      wrap={"wrap"}
      sx={{ height: "100vh" }}
    >
      <Box>
        <img
          src={footballBackground}
          alt="background"
          style={{ width: 300, height: 300 }}
        />
        <Box>
          <HStack>
            <Heading>Welcome to ACE Champions League</Heading>
            <ToggleColor />
          </HStack>
          <Text>Where 12 GovTech teams compete to be the best</Text>
          <HStack sx={{ mt: 5 }}>
            <Button colorScheme="green">Register Teams</Button>
            <Button>Input Results</Button>
          </HStack>
        </Box>
      </Box>
      <Box>
        <BaseCard>
          <ResultTable />
        </BaseCard>
      </Box>
    </Flex>
  );
};

export default Home;
