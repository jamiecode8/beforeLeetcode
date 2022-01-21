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
    let c = lines[0] // 總共有幾個數字
    let arr = lines[1].split(' ')

    let d = arr[1] / arr[0];
    for(let i = 1; i < arr.length; i++){
        if( arr[i] / arr[i-1] != d){
            console.log("No");
            return
        }
    }
    console.log("Yes");
}
 
// 有分行的
solve([
    '3', '3 9 28',
])

//node LIOJ_005_1.js