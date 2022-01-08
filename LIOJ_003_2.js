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

    let t = lines;
    let ans = t*340;
        console.log(ans);
   
}
 
solve([
    10
])

// node LIOJ_003_2.js