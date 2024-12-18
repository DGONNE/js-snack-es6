// Snack-2
/* Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Array
const teams = [
{
    teamName:'Fiorentina',
    points: 0,
    fouls: 0
},
{
    teamName:'Roma',
    points: 0,
    fouls: 0
},
{
    teamName:'Napoli',
    points: 0,
    fouls: 0
},
{
    teamName:'Inter',
    points: 0,
    fouls: 0
}
];

// ciclare array con numeri randomici

for(let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.points = getRndInteger(0, 102);
    team.fouls = getRndInteger(0,70);
}



// nuovo array con solo nomi e falli subiti 
const teamsAndFouls = [];
for(let i = 0; i < teams.length; i++) {
    const team = teams[i];
    teamsAndFouls.push({
        teamName: team.teamName,
        fouls: team.fouls
    });
}
console.log(teamsAndFouls)