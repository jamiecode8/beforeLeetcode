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
    toLowerCase(str)
}

function toLowerCase(str) {
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if( str[i] >= 'A' && str[i] <= 'Z' ){
            let code = str.charCodeAt(i)
            newStr += String.fromCharCode(code + 32)
        }else{
            newStr += str[i]
        }
    }
    console.log(newStr);
}
 
solve(
    'ABC!!'
)

// 測試指令 $ node LIOJ_006_1042.js
// String toLowerCase

// Description
    // 給你一個字串 S，請你把 S 裡面出現的大寫英文字母都轉成小寫

// Input
    // 輸入只有一行，為一個字串 S，1 <= length(S) < =100

// Output
    // 請輸出把 S 裡面的大寫英文字母都轉成小寫英文字母以後的結果