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
    //i是第幾層
    //一共有 2N-1 層
    //第i層會有 2N-1 個 *
    //第i層會有 N-i 個 空白
    //當 i > N 時，每一層都是 N-1 個 空白 + 一個 "|"

    let N = lines;
    let h = 2*N-1;

    //印出一行當中的每一個樣子
    for(let i = 1; i <= h; i++){
        printLayer(i, N)
    }

    function printLayer(i, N){
        if(i > N) {
            let str = repeat(' ', N-1) + "|"
            console.log(str);
        }else{
            let str = repeat(' ', N-i) + repeat('*', 2*i-1)
            console.log(str);
        }
    }

    //重複畫某個樣式n次
    function repeat(str, n){
        let s = ''
        for (let i=1; i<=n; i++){
            s +=str
        }
        return s
    }
}
 
solve([
    7
])

// node LIOJ_004_1.js