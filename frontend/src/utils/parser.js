const parseNewLine = (input) => {
  return input.split("\n");
};

const parseTeam = (input) => {
  const result = [];
  const teams = parseNewLine(input);
  teams.forEach((team) => {
    const [name, registrationDate, group] = team.split(" ");
    result.push({
      name,
      registrationDate,
      group,
    });
  });

  return result;
};

const parseResults = (input) => {
  const result = [];
  const matches = parseNewLine(input);
  matches.forEach((match) => {
    const [teamOne, teamTwo, teamOneGoals, teamTwoGoals] = match.split(" ");
    result.push({
      teamOne,
      teamTwo,
      teamOneGoals,
      teamTwoGoals,
    });
  });

  return result;
};

export { parseNewLine, parseTeam, parseResults };
