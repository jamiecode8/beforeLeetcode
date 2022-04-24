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
    filter(lines);
    // filter(lines, deleteSame);
}

function filter(lines) {
    let target = lines[0]
    let n = Number(lines[1])
    let arr = []
    for(let i = 2; i <= n+1 ; i++){
      arr.push(lines[i])
    }
    deleteSame(arr, target)
}

function deleteSame (arr, target){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]!=target){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

 
// 有分行的
solve([
    '3','5','1','3','3','2','8',
])

//node LIOJ_006_2.js
// Array filter 刪除指定值：第一個數字是指定值，第二個數字是共有幾個數字
// 後面有一樣都都刪掉，印出新陣列
// 不能繳作業