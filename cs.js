setTimeout(()=>{
    console.log(3)
})
new Promise((resolve, reject)=>{
    console.log(1);
    resolve();
    setTimeout(()=>{
        console.log(2);
    })
}).then((resolve, reject)=>{
    console.log(5)
})

