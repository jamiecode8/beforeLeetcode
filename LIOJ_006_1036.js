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
    let n = lines[0]
    //取得原始陣列 
    let arr = []
    for(let i = 1; i <= n ; i++){
      arr.push(lines[i])
    }
    //把陣列送到 reverse function
    reverse(arr);
}

function reverse(arr) {
  for(let i = arr.length; i > 0 ; i--){
    console.log(i,arr[i-1]);
  }
}
 
// 有分行的
solve([
    '3','1','2','3',
])

//node LIOJ_006_1.js
// Array reverse
// 不能繳作業