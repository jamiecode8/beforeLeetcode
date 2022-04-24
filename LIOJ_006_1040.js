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
    let separator = lines[0]
    let n = Number(lines[1])
    let arr = []
    for(let i = 2; i <= n+1 ; i++){
      arr.push(lines[i])
    }
    join(arr, separator)
    console.log(join(arr, separator))
}

function join(arr, separator) {
    let str = ''
    // console.log(arr);
    for(let i = 0; i < arr.length; i++){
        if(i < arr.length-1){
            str += arr[i] + separator
        }else{
            str += arr[i]
        }
    }
    return str
}

 
// 有分行的
solve([
    '!!','3','1','2','3',
])

// 測試指令 $ node LIOJ_006_1040.js
// join 

// Description
    // 給你一個數列以及要組合的字串 str，請輸出數列裡面每個元素與 str 組合而成的結果

// Input
    // 第一行為要尋找的目標 target（1<=target<=1000）
    // 第二行為一個數字 N（1<=N<=100），代表一共有幾個數字
    // 接下來 N 行每行都是一個數字

// Output
    // 請輸出數列裡面每個元素與 str 組合而成的結果