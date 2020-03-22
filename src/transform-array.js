module.exports = function transform( arr ) {
  if (!(arr instanceof Array)) throw new Error();
  let transformArr = [];
    for (let i = 0; i < arr.length; i++){
      if (z === 1) {
        z = 0;
        continue;
      }
      else if (arr[i] == "--double-next" && i < arr.length - 1) { 
        transformArr.push(arr[i + 1]);
      }
      else if (arr[i] == "--double-prev" && i > 1) { 
        transformArr.push(arr[i - 1]);
      }
      else if (arr[i] == "--discard-prev") {
      transformArr.pop() ;
      }
      else if  (arr[i] == "--discard-next" && i < arr.length-1) {
        z = 1;
      }
      else if(arr[i] != "--discard-prev" && arr[i] != "--double-prev" && arr[i] != "--double-next" && arr[i] != "--discard-next"){
        transformArr.push(arr[i]);
      }
    return transformArr;
  }
};
