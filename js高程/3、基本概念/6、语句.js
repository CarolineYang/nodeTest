let i = 0;
// do{
//     i+=2;
// }while(i<10);
// console.log(i);

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
console.log(Object)
