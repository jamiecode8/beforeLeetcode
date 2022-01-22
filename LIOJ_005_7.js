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
      for(let i = 0; i < n; i++){
        let y = i * 4
        var x1 = Number(lines[1+y])
        var y1 = Number(lines[2+y])
        var x2 = Number(lines[3+y])
        var y2 = Number(lines[4+y])
        let ans = distance(x1, y1, x2, y2)
        console.log(ans);
      }
}

function distance(x1, y1, x2, y2){
    let distance = Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2))
    let ans = distance.toFixed(2)
    return ans
  }
 
// 有分行的
solve([
    '2', '1', '1', '2', '2', '3', '3', '4', '4',
])

//node LIOJ_005_7.js
// 不能繳作業