let arr1 = [1,3,2,4,2,3];
let arr2 = [3,5,2,10,3];
function f(arr1,arr2) {
    return arr1.filter((item)=>{
        if(arr2.indexOf(item)!=-1){
            arr2.splice(arr2.indexOf(item),1)
            return true;
        }else{
            return false;
        }
        // return arr2.includes(item)
    })
}
console.log(f(arr1,arr2))