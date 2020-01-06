var ad=document.getElementById('a');
// console.log(ad.innerText)
//try catch 语句
try{
    console.log(ad.innerText)
}catch (e) {
    // throw new Error(e)
    console.log(e,e.message)
}
