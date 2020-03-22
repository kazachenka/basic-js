module.exports = function countCats(backyard) {
  let number = 0;
    for( let a of backyard) {
      for( let e of a) {
        e === '^^' ? number++ : number;
      }
    }
  return number;
};
