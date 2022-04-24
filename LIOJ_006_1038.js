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
    let searchElement = lines[0]
    let n = Number(lines[1])
    let arr = []
    for(let i = 2; i <= n+1 ; i++){
      arr.push(lines[i])
    }
    // console.log('1', searchElement);
    console.log(indexOf(arr, searchElement))
}

function indexOf(arr, searchElement) {
    // console.log(arr);
    for(let i = 0; i < arr.length; i ++){
        if(arr[i]===searchElement){
            return i
        }
    }
    return '-1'
}
 
// 有分行的
solve([
    '3','5','1','2','0','6','8',
])

// 測試指令 $ node LIOJ_006_1038.js
// indexOf 

// Description
    // 給你一個數列以及目標 target，若是數列中有符合 target 的元素，請輸出它的 index若是沒有，請輸出 -1

// Input
    // 第一行為要尋找的目標 target（1<=target<=1000）
    // 第二行為一個數字 N（1<=N<=100），代表一共有幾個數字
    // 接下來 N 行每行都是一個數字

// Output
    // 若是找到 target，請輸出它的 index（由 0 開始計算）；若是有多個符合的，請輸出 index 最小的那一個
    // 若是沒有找到，請輸出 -1