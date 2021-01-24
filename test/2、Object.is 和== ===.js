let a = 10;
let b = '10';
// console.log(a==b,a===b,Object.is(a,b))
// //===比较时不进行隐式类型转换
// //Object.is在三等好判断的基础上特别处理了NaN，-0和+0的区别
// console.log(Object.is(NaN,NaN))
// //比较特殊
// console.log(Object.is(-0,+0))
var ss = 'ahsh';
console.log(ss.slice(0,0))
var getRow = function(rowIndex) {
    let i=0;
    let res = [];

    while(i<=rowIndex){
        res[i]=new Array(i+1);
        for(let j=0;j<i+1;j++){
            if(j==0 || j==i){
                res[i][j]=1;

            }else{
                if(i>0){
                    if(j>0 && j<i){
                        res[i][j] = res[i-1][j]+res[i-1][j-1];
                    }
                }
            }
        }
        i++;
    }
    return res[-1];
};
var aa = 0;
console.log(aa.toFixed(0))








