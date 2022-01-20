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
    let N = Number(tmp[0]);
    let M = Number(tmp[1]);
    for(let d = N; d <= M; d++){
          //1. 判斷目前的數字有x位數
        let a = d + '';
        let x = a.length;
        isNarcissisticNumber(a, x)
    }

    function isNarcissisticNumber(a, x){
        //2. 拆解出每一個數字 numberI
        let total = 0;
        for(let i = 0; i < a.length; i++){
            let numberI = a[i];
            //每一位數計算x次方 > 相加 > 比對是否等於目前的數字  
            total += Math.pow(numberI, x); //算出加總的數字
        }
        //是 回傳數字；否 不做任何事
        if(total == a){
            console.log(a)
        }
    }
}
 
solve([
    '5 200'
])

//node LIOJ_004_3.js