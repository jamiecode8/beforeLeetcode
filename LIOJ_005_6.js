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
    
    let maxNumber = Number(lines[0]);
    let sum = 0;
    for(let i = 1; i <= maxNumber; i++){
        let SquareNumber = isSquareNumber(i);
        sum += SquareNumber;
    }
    console.log("sum",sum);
}
    function isSquareNumber(value){
        let half = Math.sqrt(value);
        let int = Math.floor(half);
        let SquareNumber = int*int;
        if(SquareNumber==value){
            return value
        }else{
            return 0
        }
    }
 
solve([
    '30'
])

//node LIOJ_005_6.js
// 不能繳作業