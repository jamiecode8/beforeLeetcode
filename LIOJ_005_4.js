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
    let arr = lines[0].split(' ');
    let num1 = Number(arr[0])
    let math = arr[1]
    let num2 = Number(arr[2])
    let ans = 0
    switch(math){
        case "+" :
            ans = num1 + num2
        break;
        case "-" :
            ans = num1 - num2
        break;
        case "*" :
            ans = num1 * num2
        break;
        case "/" :
            ans = num1 / num2
        break;
    }

    console.log(ans)
}
 
solve([
    '80 - 7'
])

//node LIOJ_005_4.js
// 算出來了 但不能繳作業