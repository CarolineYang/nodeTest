let str = 'get-element-by-id'
// let res = str.replace(/-\w/g, (a) => {
//     return a.toUpperCase()
// }).replace(/-/g, '')
// console.log(res)
// let str = 'get-element-by-id'
str.replace(/-\w/g,(a)=>{
    return a.toUpperCase()
}).replace(/-/g,"")
function toCamelCase (str) {
    let str1 = str.split('-')
    for (let i = 1; i < str1.length; i++) {
        str1[i][0].toUpperCase();
        str1[i] = str1[i][0].toUpperCase()+str1[i].substring(1)
    }
    return str1.join('')
}
console.log(toCamelCase(str))
function A() {
    this.a = 1
    return {
        a: 2,
        b: 3
    }
}

A.prototype.b = 4
A.prototype.c = 5

let newObj = new A()

console.log(newObj.a)
console.log(newObj.b)
console.log(newObj.c)
