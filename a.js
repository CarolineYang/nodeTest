

let a = "[ 0  , 17  ]"
a = a.split(',')
console.log(/\d+/.exec(a[1])[0],/\d+/.exec(a[0]))
function getAge(...args) {
    // console.log(...args)
    console.log(typeof args);
}

getAge(21)
console.log(/^[0-9]{11}$/.test('12345612i'))