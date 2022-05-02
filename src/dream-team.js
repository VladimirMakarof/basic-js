const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam([' Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  let team = '';
  if (Array.isArray(members)) {
    team = members.filter(x => typeof x === "string").map(item => item.trim()[0].toUpperCase()).sort().join('');
    return team;
  } else {
    return false
  }


}

//createDreamTeam(['  Olivia', 1111, ' l ily', '  o scar', true, null, ' natt', 'Ann', 'Dmitry', 'Max']);

module.exports = {
  createDreamTeam
};