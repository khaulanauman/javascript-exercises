const repeatString = function(string,num) {
let rString="";
if(num<0)rString="ERROR";
for(let i=1;i<=num;i++){
    rString+=string;
}
return rString;
};

// Do not edit below this line
module.exports = repeatString;
