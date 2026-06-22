const repeatString = function(str, nums) {
if(nums < 0){
    return "ERROR";
}
let result = "";
for(let i =0; i< nums; i++){
    result += str;
}
return result;
};

// Do not edit below this line
module.exports = repeatString;
