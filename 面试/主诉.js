let a = [1,2,3];
let b = [{
    age:2,
    children:[
        {
        
        }
    ]
}]

a = a.map(function (item) {
    return item*2
});
console.log(a)
