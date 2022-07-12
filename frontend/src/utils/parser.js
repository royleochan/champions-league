const parseTeam = (input) => {
  const result = [];
  const teams = input.split("\n");
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
  const matches = input.split("\n");
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

export { parseTeam, parseResults };
