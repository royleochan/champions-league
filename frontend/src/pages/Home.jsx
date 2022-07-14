import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  useDisclosure,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import footballBackground from "assets/football.png";
import BaseCard from "components/BaseCard";
import ResultTable from "components/ResultTable";
import ToggleColor from "components/ToggleColor";
import ModalForm from "components/ModalForm";
import TEAM_CONSTANTS from "constants/team";
import MATCH_CONSTANTS from "constants/match";
import request from "utils/request";
import { parseResults, parseTeam } from "utils/parser";
import { showErrorToast, showSuccessToast } from "utils/toastUtil";

const Home = () => {
  const toast = useToast();
  const [groupOneResults, setGroupOneResults] = useState([]);
  const [groupTwoResults, setGroupTwoResults] = useState([]);
  const [isResetLoading, setIsResetLoading] = useState(false);
  const [isResultsLoading, setIsResultsLoading] = useState(false);

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

  const getResults = async () => {
    try {
      setIsResultsLoading(true);
      const response = await request.get("/operation/results");
      const { data } = response;
      const { one, two } = data;
      setGroupOneResults(one);
      setGroupTwoResults(two);
    } catch (err) {
      console.log(err);
      showErrorToast(toast, "Failed to compute results");
    } finally {
      setIsResultsLoading(false);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  const submitTeams = async (values, reset) => {
    const input = values[TEAM_CONSTANTS.name];
    const result = parseTeam(input);
    try {
      setIsResultsLoading(true);
      await request.post("team", result);
      await getResults();
      showSuccessToast(toast, TEAM_CONSTANTS.success);
    } catch (err) {
      console.log(err);
      showErrorToast(toast, TEAM_CONSTANTS.fail);
    } finally {
      onRegisterModalClose();
      setIsResultsLoading(false);
      reset();
    }
  };

  const submitResults = async (values, reset) => {
    const input = values[MATCH_CONSTANTS.name];
    const result = parseResults(input);
    try {
      setIsResultsLoading(true);
      await request.post("match", result);
      await getResults();
      showSuccessToast(toast, MATCH_CONSTANTS.success);
    } catch (err) {
      console.log(err);
      showErrorToast(toast, MATCH_CONSTANTS.error);
    } finally {
      onResultsModalClose();
      setIsResultsLoading(false);
      reset();
    }
  };

  const resetData = async () => {
    try {
      setIsResetLoading(true);
      setIsResultsLoading(true);
      await request.delete("operation/reset");
      await getResults();
      showSuccessToast(toast, "Cleared all data");
    } catch (err) {
      console.log(err);
      showErrorToast(toast, "Faild to clear data");
    } finally {
      setIsResetLoading(false);
      setIsResultsLoading(false);
    }
  };

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
              <Button
                onClick={resetData}
                isLoading={isResetLoading}
                leftIcon={<DeleteIcon />}
                colorScheme="red"
              >
                Reset Data
              </Button>
            </HStack>
          </Box>
        </Box>
        <VStack sx={{ height: "75vh" }} justifyContent={"space-between"}>
          <BaseCard>
            <ResultTable
              title={"Group 1 Results"}
              results={groupOneResults}
              isLoading={isResultsLoading}
            />
          </BaseCard>
          <BaseCard>
            <ResultTable
              title={"Group 2 Results"}
              results={groupTwoResults}
              isLoading={isResultsLoading}
            />
          </BaseCard>
        </VStack>
      </Flex>
      <ModalForm
        isOpen={isRegisterModalOpen}
        onClose={onRegisterModalClose}
        title={"Register Teams"}
        name={TEAM_CONSTANTS.name}
        submitHandler={submitTeams}
        placeholder={TEAM_CONSTANTS.placeholder}
      />
      <ModalForm
        isOpen={isResultsModalOpen}
        onClose={onResultsModalClose}
        title={"Input Results"}
        name={MATCH_CONSTANTS.name}
        submitHandler={submitResults}
        placeholder={MATCH_CONSTANTS.placeholder}
      />
    </>
  );
};

export default Home;
