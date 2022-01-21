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

    let str = lines[0]
    let isPalindrome = "";
    let length = str.length-1;

    for(let i = length ; i >= 0; i--){
        isPalindrome += str[i];
    }

    if( isPalindrome === str ){
        console.log("Ture")
    }else{
        console.log("False")
        };
}
 
solve([
    'ac'
])

//node LIOJ_005_5.js
// 不能繳作業