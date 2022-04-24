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
    let str = lines
    trim(str)
}

function trim(str) {
    let target = ' '
    let first = 0
    let last = 0
    let newStr = ''
    for(let i = 0; i <= str.length; i++){
        if(str[i] != target){
            last = i
        }
    }
    for(let j = str.length; j > 0; j--){
        if(str[j] != target){
            first = j
        }
    }
    for(let k = first; k < last; k++){
        newStr += str[k]
    }
    console.log(newStr);
}
 
solve(
    '  abc  '
)

// 測試指令 $ node LIOJ_006_1041.js
// trim

// Description
    // 給你一個字串 S，請輸出把頭尾的空格去掉之後的結果（只有頭尾，在字串中間的不算）

// Input
    // 輸入只有一行，為一個字串 S，1 <= length(S) < =100

// Output
    // 請輸出把 S 的頭尾空格去掉之後的結果