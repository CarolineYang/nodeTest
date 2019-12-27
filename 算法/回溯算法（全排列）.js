function backtrack(n,nums,output,first){
    if(first==n){
        let nus=JSON.parse(JSON.stringify(nums));
        output.push(nus)
    }
    for(let i=first;i<n;i++){
        let kk=nums[first];
        nums[first]=nums[i];
        nums[i]=kk;
        console.log(i)
        backtrack(n,nums,output,first+1);
        console.log('s,',i)
        let kk1=nums[first];
        nums[first]=nums[i];
        nums[i]=kk1;
    }
    return output
}

let output=[];
let nums=[1,2,3];
let n=nums.length;
let num=JSON.parse(JSON.stringify(nums));
// console.log(backtrack(n,num,output,0));
var combinationSum = function(candidates, target) {
    let hhe=[];
    let hh=[];
    let loc=0;
    candidates.sort((a,b)=>a-b);
    let tar=target;
    let flag=false;
    function back(tar,hhe,candidates){
        for(let i=0;i<candidates.length;i++){
            if(tar==candidates[i]){
                hhe.push(candidates[i])
                hh.push(hhe)
                console.log('??',hh)
                flag=true;
                return hhe
            }else if(tar<candidates[i]){
                flag=false;
                hhe=[];
                tar=target;
                return hhe
            }
            hhe.push(candidates[i])
            var a=0;
            for(let k=0;k<hhe.length;k++){
                a+=hhe[k]
            }
            tar=tar-a;

            console.log('hh',i,hhe,tar)
            let hui=back(tar,hhe,candidates);
            console.log('hui',i,hui,flag)
            if(flag && hui.length>0){
                // hh.push(hhe)
                flag=false;
                tar=target;
                hhe=candidates.slice(0,i+1);

            }


        }
        return hhe

    }
    back(tar,hhe,candidates)
    return hh
};
console.log(combinationSum([2,3,5],8))
