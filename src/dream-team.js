module.exports = function createDreamTeam( members ) {
  let team = '';
  for(let i = 0; i < members.length;i++){
   ( members[i].split('')[0].charCodeAt() >= 65 && members[i].split('')[0].charCodeAt() <= 90) ? team += members[i][0].split('') : team;
  }
  return res = team == '' ? false : team.split('').sort().join('');
};
