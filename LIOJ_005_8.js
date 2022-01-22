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
    let dis = null
    let min = Infinity
    let ansX1 = 0;
    let ansY1 = 0;
    let ansX2 = 0;
    let ansY2 = 0;
      for(let i = 1; i <= n; i++){
        for(let j = i+1; j <= n; j++){
          let tmp1 = lines[i].split(' ')
          let tmp2 = lines[j].split(' ')
          let x1 = Number(tmp1[0])
          let y1 = Number(tmp1[1])
          let x2 = Number(tmp2[0])
          let y2 = Number(tmp2[1])
          dis = distance(x1, y1, x2, y2)
          if(dis < min){
            min = dis
            ansX1 = x1
            ansY1 = y1
            ansX2 = x2
            ansY2 = y2
          }
        }
      }
      if( ansX1 > ansX2 ){
        console.log(ansX2, ansY2);
        console.log(ansX1, ansY1);
      }else if( ansX2 > ansX1 ){
        console.log(ansX1, ansY1);
        console.log(ansX2, ansY2);
      }else if( ansY1 > ansY2 ){
        console.log(ansX2, ansY2);
        console.log(ansX1, ansY1);
      }else{
        console.log(ansX1, ansY1);
        console.log(ansX2, ansY2);
      }

      
}

function distance(x1, y1, x2, y2){
    let distance = Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2))
    let ans = distance.toFixed(2)
    return ans
  }
 
// 有分行的
solve([
    '4', '2 3', '1 3', '1 2', '1 1',
])

//node LIOJ_005_8.js
// 最近點對