import { parseNewLine } from "./parser";

const teamValidator = {
  numTeams: (v) =>
    parseNewLine(v).length === 12 || "Should have exactly 12 registered teams",
  validateGroups: (v) => {
    const teams = parseNewLine(v);
    const groupedTeams = new Map();
    let hasCorrectGroups = true;

    groupedTeams.set("1", []);
    groupedTeams.set("2", []);
    teams.forEach((team) => {
      const [name, registrationDate, group] = team.split(" ");
      if (group === "1" || group === "2") {
        groupedTeams.get(group).push(name);
      } else {
        hasCorrectGroups = false;
      }
    });
    return (
      (hasCorrectGroups &&
        groupedTeams.get("1").length === 6 &&
        groupedTeams.get("2").length === 6) ||
      "Must only have groups 1 and 2 with 6 teams each"
    );
  },
};

const resultsValidator = {};

export { teamValidator, resultsValidator };
