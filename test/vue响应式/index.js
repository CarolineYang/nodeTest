var observe = require('./observe');
let obj = {
    a:{
        b:{
            c:{
                d:4
            }
        }
    },
    s:{
        w:{
            dd:99
        }
    },
    c:[55,22]
};
observe(obj);
obj.c.push(1);