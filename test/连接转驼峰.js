let str = '-webkit-border-image'
let res =str.replace(/^\-/, '').replace(/\-\w/g, function(a) {
        return a[1].toUpperCase();
    });
console.log(res,res[2])
// let str = 'get-element-by-id'
// let res = str.replace(/^\-/, '').replace(/-\w/g, function(a, n) {
//     console.log(a,typeof a)
//     return a[1].toUpperCase();
// });
// function toCamelCase (str) {
//     let str1 = str.split('-')
//     for (let i = 1; i < str1.length; i++) {
//         str1[i][0].toUpperCase();
//         str1[i] = str1[i][0].toUpperCase()+str1[i].substring(1)
//     }
//     return str1.join('')
// }
console.log(res)
// function A() {
//     this.a = 1
//     return {
//         a: 2,
//         b: 3
//     }
// }
//
// A.prototype.b = 4
// A.prototype.c = 5
//
// let newObj = new A()
//
// console.log(newObj.a)
// console.log(newObj.b)
// console.log(newObj.c)
function merge( A, B ) {
    // write code here
    if(A.length==0){
        for(let i=0;i<B.length;i++){
            A.push(B[i])
        }
        return A
    }
    for(let i=0;i<B.length;i++){
        for(let j=0;j<A.length;j++){
            if(B[i]>=A[j]){
                A[j+1] = B[i];
                A.splice(j+1,1,B[i])
                break;
            }else{
                if(j==0){
                    A.splice(0,1,B[i])
                }else{
                    A.splice(j-1,1,B[i])
                }

                break;
            }
        }
    }
    return A
}
console.log(merge([],[1]))