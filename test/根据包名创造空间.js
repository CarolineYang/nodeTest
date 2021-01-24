function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.');
    let aa = oNamespace;
    for(let i=0;i<arr.length;i++){
        if(oNamespace[arr[i]]){
           if(typeof oNamespace[arr[i]]!="object"){
               oNamespace[arr[i]] = {};
           }
        }else{
            oNamespace[arr[i]] = {};
        }
        oNamespace = oNamespace[arr[i]];
    }
    return aa
}
console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'))