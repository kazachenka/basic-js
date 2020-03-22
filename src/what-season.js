module.exports = function getSeason( date ) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } 
  else if (!date instanceof Date || isNaN(date)) {
    throw new Error;
  } 
  else {
    let m = date.getMonth() + 1;
    let s;
    switch(m){
      case 1:
       s = 'winter';
        break;
      case 2:
       s ='winter';
        break;
      case 3:
       s ='spring';
        break;
      case 4:
       s ='spring';
         break;
      case 5:
       s ='spring';
        break;
      case 6:
       s ='summer';
        break;
      case 7:
       s ='summer';
        break;
      case 8:
       s ='summer';
         break;
      case 9:
       s ='autumn';
        break;
      case 10:
       s ='autumn';
        break;
      case 11:
       s ='autumn';
         break;
      case 12:
       s ='winter';
        break;             
    }
    return s;
  }
};
