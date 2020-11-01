module.exports = function repeater(/* str, options */) {
    let res = '';
    for (let i = 1; i <= options.repeatTimes;i++){
        res += str
        for (let j = 1; j < options.additionRepeatTimes+1;j++){
            res += options.addition;
            if (j !== options.additionRepeatTimes){
                res += options.additionSeparator;
            }
        }
        if (i !== options.repeatTimes){
         res += options.separator;
        }
        
    }
    return res;
};
  
