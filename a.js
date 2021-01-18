

module.exports.haha=function () {
    console.log('hhh')
}

console.log('kkkk')
// console.log(module)
//exports 就是模块文件对外暴露开放的api （一个js就是一个模块）
let a = "[ 0  , 17  ]"
a = a.split(',')
console.log(/\d+/.exec(a[1])[0],/\d+/.exec(a[0]))
