// 牛逼的思想和 % /
var multiply = function(num1, num2) {
    let len = num1.length+num2.length;
    let pos = new Array(len).fill(0);
    for(let i=num1.length-1;i>=0;i--){
        let a = +num1[i];
        for(let j=num2.length-1;j>=0;j--){
            let b = +num2[j];
            let tar = a*b;
            let ind = i+1+j;
            let wei = tar%10 + pos[ind];
            let jin = ~~(tar/10)+pos[ind-1];
            while(wei>=10){
                jin = ~~(wei/10)+jin;
                wei = wei%10;
            }
            pos[ind] = wei;
            pos[ind-1]=jin;
        }
    }
    let i=0;
    while(pos[i]==0 && pos.length>1){
        pos = pos.slice(1)
    }
console.log(pos)
    return pos.join('')
};
multiply('0','0')
