//用匿名函数实现js的块级作用域
(function () {
    var now=new Date();
    console.log(now.getMonth(),now.getDate())
    if(now.getMonth()==11 && now.getDate()==23){
        console.log('happy')
    }
})();

function num(count) {
    let hh=[];
    let hh2=[];
    // (function () {
    //     for(var i=0;i<count;i++){
    //         console.log(i)
    //         hh[i]=i;
    //         hh2[i]=function (i) {
    //             return i
    //         }()
    //     }
    // })();
    for(var i=0;i<count;i++){
        // console.log(i)
        // hh[i]=i;
        hh2[i]=function (i) {
            return i
        };
        console.log('a',hh2[i])
    }
    console.log(hh,hh2,'hh2')
    return hh2
    // return {
    //     // hh,
    //     hh2
    // }
}
num(5)
console.log(num(5))
function s() {
    var hhs=new Array();
    for(var i=0;i<5;i++){
        hhs[i]=function (num) {
            return function () {
                return num
            }()
        }(i)
    }
    return hhs
}
console.log(s()[1])

