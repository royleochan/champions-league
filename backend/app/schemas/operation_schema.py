from datetime import datetime

WIN_POINTS = 3
DRAW_POINTS = 1
LOSS_POINTS = 0
ALT_WIN_POINTS = 5
ALT_DRAW_POINTS = 3
ALT_LOSS_POINTS = 1


class TeamResult():
    def __init__(self, team: str, date: str, group: int):
        self.team = team
        self.date = date
        self.group = group
        self.wins = 0
        self.losses = 0
        self.draws = 0
        self.goals = 0
        self.points = 0
        self.alt_points = 0

    def _parse_date(self, date):
        return datetime.strptime(date, "%d/%m")

    def add_goals(self, goals):
        self.goals += goals

    def add_win(self):
        self.wins += 1
        self.points += WIN_POINTS
        self.alt_points += ALT_WIN_POINTS

    def add_draw(self):
        self.draws += 1
        self.points += DRAW_POINTS
        self.alt_points += ALT_DRAW_POINTS

    def add_loss(self):
        self.losses += 1
        self.points += LOSS_POINTS
        self.alt_points += ALT_LOSS_POINTS

    def __gt__(self, other):
        if self.points == other.points:
            if self.goals == other.goals:
                if self.alt_points == other.alt_points:
                    return self._parse_date(self.date) < self._parse_date(other.date)
                else:
                    return self.alt_points > other.alt_points
            else:
                return self.goals > other.goals
        else:
            return self.points > other.points
