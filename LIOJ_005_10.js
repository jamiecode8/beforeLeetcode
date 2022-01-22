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
    let ans = whoWin(lines)
    console.log(ans);
}

function whoWin(line){
  // 判斷 每一行橫的 有任一行三個一樣，就回傳一樣的值 line[0].[0] = line[0].[1] = line[0].[2]  或 line[1].[0] = line[1].[1] = line[1].[2]
  for( i = 0 ; i < 3; i++ ) {
    if( line[i][0] == line[i][1] && line[i][0] == line[i][2]){
      return line[i][0]
    }
  }
  // 如果上面沒有，判斷每一行直的，有任一行一樣，回傳一樣的值  line[0].[0] = line[1].[0] = line[2].[0]  或  line[0].[1] = line[1].[1] = line[2].[1] 
  for( i = 0 ; i < 3; i++ ) {
    if( line[0][i] == line[1][i] && line[0][i] == line[2][i]){
      return line[0][i]
    }
  }
  // 判斷斜的，回傳一樣的值 line[0].[0] = line[1].[1] =  line[2].[2] 或 line[0].[2] = line[1].[1] =  line[2].[0] 
  if( line[0][0] == line[1][1] && line[0][0] == line[2][2]){
    return line[0][0]
  }

  if( line[0][2] == line[1][1] && line[0][2] == line[2][0]){
    return line[0][2]
  }
  return 'DRAW'
}
 
// 有分行的
solve([
    'XXO', 'OXX', 'XOO'
])

//node LIOJ_005_10.js
// OOXX
// 不能繳作業