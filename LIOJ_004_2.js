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
        let N = lines[0];
        let M = lines[1];

        for(let i = 1; i<=N; i++){
            for(let j = 1; j<=M; j++){
                console.log(i+"*"+j+"="+j*i);
            }
        }
}
 
solve([
    2, 3 
])

//node LIOJ_004_2.js