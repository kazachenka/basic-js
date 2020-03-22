module.exports = class DepthCalculator {
    calculateDepth( arr, n = 1 ) {
        let x = 0;
        let a;
        let z = arr;
        for (let j = 0; j < Number.MAX_VALUE - 1; j++) {
            a = z;
            for (let i = 0; i <= a.length-1; i++ ) {
              if  ( typeof a[i] == 'object' ) {
                n++;
                z = a[i];
                break;
              }
              if (i = a.length){
                x = 1;
              }
            }
            if (x = 1)  {
                break;
            }
        }
        return n;
    }
};