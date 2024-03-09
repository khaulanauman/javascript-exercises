const removeFromArray = function(arr,...theArgs) {
    let nArr=[];
arr.forEach((a )=>
{
    if(!theArgs.includes(a)){
        nArr.push(a);
    }
}
)   
return nArr;
};

// Do not edit below this line
module.exports = removeFromArray;
