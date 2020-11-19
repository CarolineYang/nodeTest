let bb = 20;
// if(bb<20) console.log('ss') else if(bb<25) console.log('aas') else console.log('sa')


let i = 0;
// do{
//     i+=2;
// }while(i<10);
console.log(i);

while(i<10){
    i+=2;
}
console.log(i);
 //with语句
let a={
    name:'杨萍萍'
};
with(a){
    var hh = name;
}
console.log(hh)

!(function foo() {
    console.log('??')
})()
console.log(Object);
let nums = 0;
//label语句
aab:
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        if(i==5 && j==5){
            continue aab;
        }
        nums++;
    }
}
console.log(nums)
