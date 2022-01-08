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

	let tmp = lines[0].split(' ')
    let a = tmp[0]
    let b = tmp[1]

    if( a === b ){
        console.log("Yes")
    }else{
        console.log("No")
    }

}
 
solve([
    '50 50'
])

// node LIOJ_003_1.js
// stop ctrl c