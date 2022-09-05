function gameObject(){
  return {
"home": {
    "teamName": 'Brooklyn Nets',
    "colors": ["Black", "white"],
    "players": { 
      "Alan Anderson": {
        "number": 0,
        "shoe": 16,
        "points": 22,
        "rebounds": 12,
        "assists": 12,
        "steal": 3,
        "blocks": 1,
       "slamDunks": 1,
      },
      "Reggie Evans": {
        "number": 30,
        "shoe": 14,
        "points": 12,
        "rebounds": 12,
        "assists": 12,
        "steal": 12,
        "blocks": 12,
       "slamDunks": 7,
    }, 
    "Brook Lopez": {
      "number": 11,
      "shoe": 17,
      "points": 17,
      "rebounds": 19,
      "assists": 10,
      "steal": 3,
      "blocks": 1,
     "slamDunks": 15,
    },
    "Mason Plumlee": {
      "number": 1,
      "shoe": 19,
      "points": 26,
      "rebounds": 12,
      "assists": 6,
      "steal": 3,
      "blocks": 8,
     "slamDunks": 5,
    },
    "Jason Terry": {
    "number": 31,
    "shoe": 15,
    "points": 19,
    "rebounds": 2,
    "assists": 2,
    "steal": 4,
    "blocks": 11,
   "slamDunks": 1,
    }
  }
},

"away": {
    "teamName": "Charlotte Hornets",
    "colors": ["Turquoise", "Purple"],
    "players": {

      "Jeff Adrien": {
        "number": 4,
        "shoe": 18,
        "points": 10,
        "rebounds": 1,
        "assists": 1,
        "steal": 2,
        "blocks": 7,
       "slamDunks": 2,
      },
      "Bismak Biyombo	": {
        "number": 0,
        "shoe": 16,
        "points": 12,
        "rebounds": 4,
        "assists": 7,
        "steal": 7,
        "blocks": 15,
       "slamDunks": 10,
    }, 
    "DeSagna Diop": {
      "number": 2,
      "shoe": 14,
      "points": 24,
      "rebounds": 12,
      "assists": 12,
      "steal": 4,
      "blocks": 5,
     "slamDunks": 5,
    },
    "Ben Gordon": {
      "number": 8,
      "shoe": 15,
      "points": 33,
      "rebounds": 3,
      "assists": 2,
      "steal": 1,
      "blocks": 1,
     "slamDunks": 0,
    },
    "Brendan Haywood": {
    "number": 33,
    "shoe": 15,
    "points": 6,
    "rebounds": 12,
    "assists": 12,
    "steal": 22,
    "blocks": 5,
   "slamDunks": 12
    }
  }
}
}
}

//////////////////////////////////////////////////////////////////

function homeTeam(){
  return gameObject().home
}

function awayTeam(){
  return gameObject().away
}

//////////////////////////////////////////////////////////////////

function players(){
  return Object.assign({}, homeTeam().players, awayTeam().players)
}

function numPointsScored(playerInput){
 return players()[playerInput].points
}
console.log('Number of Points:',  numPointsScored("DeSagna Diop"))

//////////////////////////////////////////////////////////////////

function shoeSize(playerInput){
  return players()[playerInput].shoe
}
console.log('Player shoe size:', shoeSize("Brendan Haywood"))

//////////////////////////////////////////////////////////////////

function colors(){
  return {
  [homeTeam().teamName]: homeTeam().colors, 
  [awayTeam().teamName]: awayTeam().colors
  }
}
console.log(colors())

function teamColors(team){
  return colors()[team]
}
console.log('Team color:', teamColors("Charlotte Hornets"))

//////////////////////////////////////////////////////////////////

//function teamName(){
  //return gameObject().teamName
//}
//console.log('Teams:', teamName)

//////////////////////////////////////////////////////////////////

function jersey(){
}

function playerNumbers(numbers){
  return jersey()[numbers]
}
debugger
console.log('Jersey Numbers:',  playerNumbers("Brooklyn Nets"))

//"away": {
  //"teamName": "Charlotte Hornets",
 // "colors": ["Turquoise", "Purple"],
  //"players": {

   // "Jeff Adrien": {
    //  "number": 4,
    //  "shoe": 18,
    //  "points": 10,
    //  "rebounds": 1,
    //  "assists": 1,
    //  "steal": 2,

    