let a=[['1','2','.'],['1','6','4']];
a[0][2]=Number(9).toString()
console.log(a)
Array.prototype.unique=function(isStrict) {
    if (this.length < 2)
        return [this[0]] || [];
    var tempObj = {}, newArr = [];
    for (var i = 0; i < this.length; i++) {
        var v = this[i];
        var condition = isStrict ? (typeof tempObj[v] != typeof v) : false;
        if ((typeof tempObj[v] == "undefined") || condition) {
            tempObj[v] = v;
            newArr.push(v);
        }
    }
    return newArr;
}
var bb=[1,2,3,4,1,2,3,4,5,6,7,2,1,3,'1']
console.log(bb.unique())
for(let i=0;i<10;i++){
    i=i+3;
    console.log(i)
}
var countAndSay = function(n) {
    var res='1';
    function rec(){
        let k='';
        for(let i=0;i<res.length;i++){
            let a=res[i];
            let left=i;
            let num=0;
            while(res[left]==a && left<res.length){
                left++;
                num++;
            }
            i=i+num-1;
            k+=num.toString()+a;

        }
        res=k;
        console.log(res,'aaaaaaaa')
    }
    for(let i=1;i<n;i++){
        rec();
    }
    return res
};
console.log(countAndSay(1))
