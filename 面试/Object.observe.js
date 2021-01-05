var aa = {
    age:18,
    name:'ypp'
};
Object.observe(aa,function (changes) {

    changes.forEach(function(change) {

// 让我们获知变化
        console.log(change.type, change.name, change.oldValue);
    })
    })
