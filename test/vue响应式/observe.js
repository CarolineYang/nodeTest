var Observer = require('./Observer');
function observe(obj) {
    if(typeof obj !== "object"){return;}
    var ob;
    if(typeof obj.__ob__ !== 'undefined'){
        ob = obj.__ob__;
    }else{
        ob = new Observer(obj);
    }
    return ob;
}
module.exports = function observe(obj) {
    if(typeof obj !== "object"){return;}
    var ob;
    if(typeof obj.__ob__ !== 'undefined'){
        ob = obj.__ob__;
    }else{
        ob = new Observer(obj);
    }
    return ob;
}
