var multiply = function(num1, num2) {
    let num={'0':0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9};
    console.log(num1,num2)
    if(num1=='0' || num2=="0"){
        return '0'
    }
    let len=num1.length+num2.length;
    let res=new Array(len);
    for(let i=0;i<res.length;i++){
        res[i]='';
    }
    let all2=0;
    let con=0;
    for(let i=num1.length-1;i>=0;i--){
        con++;
        let a=num[num1[i]]
        for(let j=num2.length-1;j>=0;j--){
            let b=num[num2[j]];
            let all=0;
            for(let k=0;k<b;k++){
                all+=a;
            }
            if(all<10){
                all=all.toString();
                res[len-con]=all[0]+res[len-con]
            }else{
                all=all.toString();
                res[len-con]=all[1]+res[len-con];
                res[len-con-1]=all[0]+res[len-con-1]
            }
            con++;
        }
        con=con-num2.length;
    }
    for(let i=0;i<res.length;i++){
        if(res[i].length>1){
            let a=0;
            for(let j=0;j<res[i].length;j++){
                a+=num[res[i][j]]
            }
            res[i]=a.toString();
        }
    }
    console.log(res)
    let co='';
    for(let i=res.length-1;i>-1;i--){
        if(res[i]==''){
            res[i]='0'
        }
        if(co!=""){
            if(res[i].length>1){
                if(num[res[i][1]]+num[co]>=10){
                    res[i]=(num[res[i][0]]+1).toString()+((num[res[i][1]]+num[co])%10).toString()
                }else{
                    res[i]=res[i][0]+(num[res[i][1]]+num[co]).toString()
                }
            }else{
                res[i]=(num[res[i]]+num[co]).toString();
            }
        }
        if(res[i].length>1){
            co=res[i].substr(0,res[i].length-1);
            res[i]=res[i][res[i].length-1];
        }else{
            co='';
        }
    }

    if(res[0]=="0"){
        res.splice(0,1)
    }
    console.log(res.join(''))
    return res.join('')
};
let a='abc';
a[2]='d';
console.log(a)
multiply("512621602792789759",
"73487879881634")
console.log(17849419788197*877968504004372811)
function onScroll(evt) {
    // Store the scroll value for laterz.
    lastScrollY = window.scrollY;

    // Prevent multiple rAF callbacks.
    if (scheduledAnimationFrame) {
        return;
    }
    scheduledAnimationFrame = true;
    requestAnimationFrame(readAndUpdatePage);
    console.log('???')
}

window.addEventListener('scroll', onScroll);
