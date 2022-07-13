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
  Skeleton,
  Stack,
} from "@chakra-ui/react";

const ResultTable = ({ title, results, isLoading }) => {
  return (
    <TableContainer>
      <Heading size="md">{title}</Heading>
      {isLoading ? (
        <Stack sx={{ mt: 4 }}>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        <Table variant="simple" size="sm" sx={{ mt: 4 }}>
          {results.length === 0 && (
            <TableCaption>
              Standings will be shown after registration of teams has been
              completed
            </TableCaption>
          )}
          <Thead>
            <Tr>
              <Th>Team</Th>
              <Th>Date</Th>
              <Th isNumeric>W</Th>
              <Th isNumeric>D</Th>
              <Th isNumeric>L</Th>
              <Th isNumeric>Goals</Th>
              <Th isNumeric>Pts</Th>
              <Th isNumeric>Alt-Pts</Th>
            </Tr>
          </Thead>
          <Tbody>
            {results.map((result, i) => {
              const {
                team,
                date,
                wins,
                draws,
                losses,
                points,
                alt_points,
                goals,
              } = result;
              return (
                <Tr bgColor={i <= 3 ? "green.200" : ""}>
                  <Td>{team}</Td>
                  <Td>{date}</Td>
                  <Td isNumeric>{wins}</Td>
                  <Td isNumeric>{draws}</Td>
                  <Td isNumeric>{losses}</Td>
                  <Td isNumeric>{goals}</Td>
                  <Td isNumeric>{points}</Td>
                  <Td isNumeric>{alt_points}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default ResultTable;
