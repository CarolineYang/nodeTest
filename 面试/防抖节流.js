// 函数防抖，这里的抖动就是执行的意思，而一般的抖动都是持续的，多次的。假设函数持续多次执行，
// 我们希望让它冷静下来再执行。也就是当持续触发事件的时候，函数是完全不执行的，
// 等最后一次触发结束的一段时间之后，再去执行。先看一下效果： 持续触发不执行
// 不触发的一段时间之后再执行
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);  // 如果持续触发，那么就清除定时器，定时器的回调就不会执行。
        timer = setTimeout(() => {
            func.apply(this, arguments)
        }, delay)
    }
}
box.onmousemove = debounce(function () {
    box.innerHTML = `${e.clientX},${e.clientY}`
},1000);
// 节流的意思是让函数有节制地执行，而不是毫无节制的触发一次就执行一次。什么叫有节制呢？就是在一段时间内，只执行一次。
//
// 同样，我们分解一下：
//
// 持续触发并不会执行多次
// 到一定时间再去执行

function throttle(func, delay) {
    let run = true;
    return function () {
        if (!run) {
            return  // 如果开关关闭了，那就直接不执行下边的代码
        }
        run = false // 持续触发的话，run一直是false，就会停在上边的判断那里
        setTimeout(() => {
            func.apply(this, arguments)
            run = true // 定时器到时间之后，会把开关打开，我们的函数就会被执行
        }, delay)
    }
}
box.onmousemove = throttle(function (e) {
    box.innerHTML = `${e.clientX}, ${e.clientY}`
}, 1000)
