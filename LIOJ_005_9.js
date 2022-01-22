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
    let n = lines[0]
    let str =  lines[1]
    let ans = caserCode(str, n)
    console.log(ans);
}

function caserCode(valuestr, n) {
  let newArr = []
  //每一個字母分轉成數字,取得數字陣列 12, 16, 8, 7
  for(let i = 0 ; i < valuestr.length ; i++){
    let num = valuestr.codePointAt(i)
    newArr.push(num)
  }
  let result = newArr
  // 數字陣列每個值都作凱薩加密
  result.forEach((item, index, arr) => {
    arr[index] = Number(item) + Number(n);
  });

  // 加密後的數字陣列轉回字母，超過z 的從 a 開始
  let newStr = ''
  for(let j = 0 ; j < result.length; j++){
    let itemNum = result[j]
    if( itemNum > 122 ){
      result[j] = (itemNum - 122) + 96
    }
    newStr += String.fromCodePoint(result[j])
  }
  return newStr
}
 
// 有分行的
solve([
    '10', 'xray',
])

//node LIOJ_005_9.js
// 凱薩加密
// 不能繳作業, 有順序問題 所以三個function寫一起