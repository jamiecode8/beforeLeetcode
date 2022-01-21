var readline = require('readline');

var rl = readline.createInterface({
input: process.stdin
});

var lines = [];

rl.on('line', function (line) {
    lines.push(line)
    });

rl.on('close', function() {
solve(lines)
});

function solve(lines) {
    let arr = lines[0].split(' ');

    let BirthdayString = GetBirthdayString(arr)
    let ans = getspecialDay(BirthdayString)
    console.log(ans)
}

//取得生日字串
function GetBirthdayString(arr){
    let str = arr[0] + arr[1] + arr[2]
    return str;
}

//取得生命靈數
function getspecialDay(str){
    let sum = 0;
    let ans = 0;
    for(let i = 0; i < str.length; i++){
        sum += Number(str[i])
    }
    let sumStr = sum + " ";
    if(sumStr.length!=1){
        for(let j = 0; j < sumStr.length; j++){
            ans += Number(sumStr[j])
        }
    }
    return ans;
}
 
solve([
    '1985 08 1'
])

//node LIOJ_005_3.js
// 算出來了 但不能繳作業