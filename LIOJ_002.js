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
    let n = lines.length;
    for(let i=0; i<n; i++){
        let tmp = lines[i].split(' ')
        let a = Number(tmp[0])
        let b = Number(tmp[1])		
            if(a === 0 && b===0){
                return
            }

            if( a > b ){
                console.log(a)
            }else{
                console.log(b)
            }
    }
}
 
solve([
    '6 7', '0 0', '9 2' 
])