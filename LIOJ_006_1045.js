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
    let targetLength = Number(lines[1])
    let endIndex = Number(lines[2])

    padEnd(str, targetLength, endIndex)
}

function padEnd(str, beginIndex, endIndex) {
    let newSrr = ''
    for (let i = beginIndex ; i < endIndex; i++){
        newSrr += str[i]
    }
    console.log(newSrr);
}

// 有分行的
solve([
    'abcde','1','5',
])

// 測試指令 $ node LIOJ_006_1045.js
// String slice

// Description
    // slice 取陣列或者是字串的其中一部分，有兩個參數 start 與 end
    // 提取範圍是 start 到 end - 1
    // 例如說對 str=abcdef，start=1，end=5，答案就是 bcde
    // 雖然在實際使用中可以省略 end 或者是傳負數，但在這題我們暫時不考慮這種情形

// Input
    // 輸入有兩行
    // 第一行為一個字串 S, 1 <= length(S) <= 100
    // 第二行為一個數字 start , 0 <= start <= length(S)
    // 第三行為一個數字 end, start <= end <= length(S)

// Output
    // 請輸出 str.slice(start, end) 的結果