var aa = new Set([1,2,1,4,5]);
aa.forEach((val,key)=>{
    console.log(val,key)
});
// for(let i of aa){
//     console.log(i)
// }
// for(let i of aa.keys()){
//     console.log(i)
// }
// for(let [val,key] of aa.entries()){
//     console.log(val,key)
// }
console.log(aa.size)
