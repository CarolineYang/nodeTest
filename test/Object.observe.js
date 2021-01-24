var aa = {
    age:18,
    name:'ypp'
};
// Object.observe(aa,function (changes) {
//
//     changes.forEach(function(change) {
//
// // 让我们获知变化
//         console.log(change.type, change.name, change.oldValue);
//     })
//     })
function test(){
    var arr = [];
    for(var i=0;i<9;i++){
        (function (i) {
            arr[i] = function(){
                console.log(i+ " ");
            }
        })(i)

    }
    return arr;

}
var Arr = test();

for(var j=0;j<9;j++){
    Arr[j] ();
}