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

    let tmp = lines[0].split('-');
    let cardString = tmp[0]+tmp[1]+tmp[2]+tmp[3];
    let cardType = cardString[0]; // 判斷是 VISA 或 MASTER_CARD 
    let lastNumber = Number(cardString[15]); // 檢查碼

    //先排除首字不是 5 或 4 的
    if( cardType!=5 && cardType!=4 ){
        console.log(cardType, "INVALID");
        return
    }

    //計算奇數
    let oddSum = 0;
    let singleNumber;
    for(let i = 0; i <= 14; i++){
        if(i === 0 || i === 2 || i === 4|| i === 6|| i === 8||
            i === 10 || i === 12 || i === 14){
                singleNumber = cardString[i] *2
                if(singleNumber>=10){
                    singleNumber = singleNumber-9;
                }
                oddSum += singleNumber;
        }
    }

    //計算偶數
    let evenSum = 0;
    for(let i = 1; i <= 14; i++){
        if(i === 1 || i === 3 || i === 5|| i === 7|| i === 9||
            i === 11 || i === 13 || i === 15){                
                evenSum += Number(cardString[i]);
        }
    }

    let total = oddSum + evenSum;
    let chechNumber = 10 - (total % 10);
    if(chechNumber === 10){
        chechNumber = 0;
    }

    if(lastNumber === chechNumber){
        if(cardType == 5){
            console.log("MASTER_CARD");
        }else{
            console.log("VISA");
        }
    }else{
        console.log("INVALID");
    }

}
 
solve([
    '5323-9659-5924-8587'
])

//node LIOJ_005_2.js