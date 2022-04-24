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
    let target = lines[0]
    let n = Number(lines[1])
    let arr = []
    for(let i = 2; i <= n+1 ; i++){
      arr.push(lines[i])
    }
    console.log(fill(arr, target))
}


function fill(arr, value) {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(value)
    }
    return newArr
}
 
// 有分行的
solve([
    '10','3','1','2','3',
])

// 測試指令 $ node LIOJ_006_1039.js
// fill 

// Description
    // 給你一個數列以及目標 target，請你把數列中每一個元素都變成 target 並且輸出調整完的數列

// Input
    // 第一行為要尋找的目標 target（1<=target<=1000）
    // 第二行為一個數字 N（1<=N<=100），代表一共有幾個數字
    // 接下來 N 行每行都是一個數字

// Output
    // 請輸出填充完的陣列，每一個元素請用空行分隔