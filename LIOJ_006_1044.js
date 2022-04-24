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
    let str = lines[0]
    let targetLength = Number(lines[1])
    let padString = lines[2]

    padEnd(str, targetLength, padString)
}

function padEnd(str, targetLength, padString) {
    let newSrr = ''
    let ans = str
    let n = 0
    let addStr = Number(targetLength - str.length) // 要加幾個字(int)
    for (let i = 0; i < addStr; i++){ //5
        console.log('n1', n);
        newSrr += padString[n]
        console.log('padString[n]', padString[n]);
        if(newSrr.length <= addStr){
            n += 1
            console.log('n2', n);
            if( n == padString.length){
                n = 0
            }
        } 
    }
    ans += newSrr
    console.log(ans);
}

// 有分行的
solve([
    'abcaa','5','xyz',
])

// 測試指令 $ node LIOJ_006_1044.js
// String padEnd

// Description
    // padEnd 顧名思義就是在字串的尾端填充字元
    // 會有兩個參數 length 以及 str，代表預期字串最後的長度，以及要填充的字串是什麼
    // 例如說現在有個字串 S=abc，length=5，str=a，填充完就會變成 abcaa
    // 有一種特殊情況是 S 的長度已經大於等於 length，例如說 S=abc，length=1，str=zzz，結果就會是原字串 S，不會做任何改動

// Input
    // 輸入有兩行
    // 第一行為一個字串 S, 1 <= length(S) <=100
    // 第二行為預期的長度 length , 1 <= length <=100
    // 第三行為一個字串 str 1 <= length(str) <=100

// Output
    // 請輸出填充後的結果