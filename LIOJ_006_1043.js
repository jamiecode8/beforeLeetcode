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
    let str_dauflt = lines[0]
    let searchString_dauflt = lines[1]
    let str = ''
    let searchString = ''
    for (let i = str_dauflt.length-1; i >= 0 ; i--){
        str += str_dauflt[i]
    }
    for (let j = searchString_dauflt.length-1; j >= 0 ; j--){
        searchString += searchString_dauflt[j]
    }
    endsWith(str, searchString)
}

function endsWith(str, searchString) {
    for(let j = 0; j < searchString.length; j++){
        if(searchString[j] != str[j]){
            console.log('false');
            return
        }
    }
    console.log('true');
}
 
// 有分行的
solve([
    'abcde','f',
])

// 測試指令 $ node LIOJ_006_1043.js
// join 

// Description
    // 給定兩個字串 S 與 target，請判斷 S 是不是以 target 結尾
    // 例如說 S=abc，target=c，abc 是以 c 結尾沒錯，答案就是 true
    // 或者 S=abc，target=bc 或是 target=abc，答案也都是 true

// Input
    // 輸入有兩行
    // 第一行為一個字串 S, 1 <= length(S) <=100
    // 第二行為一個字串 target， 1 <= length(target) <=100

// Output
    // 如果字串 S 是以 target 結尾，請輸出 true，反之輸出 false