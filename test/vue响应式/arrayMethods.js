var def = require('./utils');
let ArrayMethod = Object.create(Array.prototype);
let methods = ['push','shift','unshift','pop','reverse','splice','sort'];



    methods.forEach((item)=>{
        // arrayMethod
        const origin = Array.prototype[item];
        let args = [...arguments];
        //    定义新的方法
        def(ArrayMethod,item,function () {
            let res = origin.apply(this,arguments);
            const ob = this.__ob__;
            let inserted = [];
            switch (item) {
                case 'push':
                case 'unshift':
                    inserted = arguments;
                case 'splice':
                    inserted = args.slice(2)
            }
            //让新加的项也响应
            if(inserted){
                ob.observeArray(inserted);
            }
            ob.dep.notify();
            return res;
        },false)

    })

module.exports = ArrayMethod;