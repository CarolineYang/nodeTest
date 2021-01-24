function rgb2hex(sRGB) {
    let req = /^(rgb|RGB)\((\d+,\s*){2}(\d+)\)$/;
    if(!req.test(sRGB)) return sRGB;
    let arr = sRGB.replace(/(rgb|RGB|\(|\))/g, '').split(',');
    let hex = '#';
    for(let i=0; i<arr.length; i++) {
        hex += ('0' + parseInt(arr[i]).toString(16)).slice(-2);
    }
    return hex;
}
// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入