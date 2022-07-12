import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import footballBackground from "assets/football.png";
import BaseCard from "components/BaseCard";
import ResultTable from "components/ResultTable";
import ToggleColor from "components/ToggleColor";
import ModalForm from "components/ModalForm";

const Home = () => {
  const {
    isOpen: isRegisterModalOpen,
    onOpen: onRegisterModalOpen,
    onClose: onRegisterModalClose,
  } = useDisclosure();
  const {
    isOpen: isResultsModalOpen,
    onOpen: onResultsModalOpen,
    onClose: onResultsModalClose,
  } = useDisclosure();

  return (
    <>
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
              <Button colorScheme="green" onClick={onRegisterModalOpen}>
                Register Teams
              </Button>
              <Button onClick={onResultsModalOpen}>Input Results</Button>
            </HStack>
          </Box>
        </Box>
        <VStack sx={{ height: "60vh" }} justifyContent={"space-between"}>
          <BaseCard>
            <ResultTable title={"Group 1 Results"} />
          </BaseCard>
          <BaseCard>
            <ResultTable title={"Group 2 Results"} />
          </BaseCard>
        </VStack>
      </Flex>
      <ModalForm
        isOpen={isRegisterModalOpen}
        onClose={onRegisterModalClose}
        title={"Register Teams"}
        name="Teams"
      />
      <ModalForm
        isOpen={isResultsModalOpen}
        onClose={onResultsModalClose}
        title={"Input Results"}
        name="Matches"
      />
    </>
  );
};

export default Home;
