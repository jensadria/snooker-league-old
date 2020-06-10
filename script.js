const leagueTable = document.getElementById('league-table');
const leagueData = document.getElementById('league-data');

const teams = [
  {
    name: 'Jokers',
    for: 149,
    against: 103,
  },
  {
    name: 'Chalkers',
    for: 136,
    against: 106,
  },
  {
    name: 'Cannington Bandits',
    for: 132,
    against: 120,
  },
  {
    name: 'Alligators',
    for: 131,
    against: 121,
  },
  {
    name: 'Cannington Ones',
    for: 129,
    against: 123,
  },
  {
    name: 'Baby Sharks',
    for: 111,
    against: 141,
  },
  {
    name: 'Hazara United',
    for: 101,
    against: 131,
  },
  {
    name: 'Touchin Tips',
    for: 99,
    against: 143,
  },
];

function calculatePercentage(f, a) {
  const pctg = (f / (f + a)) * 100;
  return pctg.toFixed(2);
}

// Create Table
function generateTable(arr) {
  const leagueTeams = [...arr];

  leagueTeams
    .sort((a, b) => {
      const percentageA = calculatePercentage(a.for, a.against);
      const percentageB = calculatePercentage(b.for, b.against);
      percentageA - percentageB;
      console.log(leagueTeams);
    })
    .forEach((team, index) => {
      const tableTeam = document.createElement('tr');
      tableTeam.innerHTML = `
    <td>${leagueTeams.indexOf(team) + 1}</td>
    <td>${team.name}</td>
    <td>${team.for}</td>
    <td>${team.against}</td>
    <td>${calculatePercentage(team.for, team.against)}</td>
    `;

      leagueData.appendChild(tableTeam);
    });
}

generateTable(teams);
