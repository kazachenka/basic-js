const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let res = ( sampleActivity != +sampleActivity || +sampleActivity >= 15 || +sampleActivity <= 0) ? false : +sampleActivity;
  let k = Math.log(MODERN_ACTIVITY / res) / ( 0.693 / HALF_LIFE_PERIOD);
  result = res == false ? res : Math.ceil(k);
  return result;
};
