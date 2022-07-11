import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";

const ResultTable = () => {
  return (
    <TableContainer>
      <Heading>Results</Heading>
      <Table variant="simple">
        <TableCaption>Current Standings</TableCaption>
        <Thead>
          <Tr>
            <Th>Team</Th>
            <Th isNumeric>W</Th>
            <Th isNumeric>D</Th>
            <Th isNumeric>L</Th>
            <Th isNumeric>Pts</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Lorem</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>2</Td>
            <Td isNumeric>3</Td>
            <Td isNumeric>5</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
