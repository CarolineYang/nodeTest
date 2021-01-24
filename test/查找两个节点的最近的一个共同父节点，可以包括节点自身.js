function commonParentNode(oNode1, oNode2) {
    for(;oNode1;oNode1=oNode1.parentNode){
        if(oNode1.contains(oNode2)){
            return oNode1;
        }
    }
}
// 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
// 否则如果字符 Unicode 编码 > 255 则长度为 2
function strLength(s, bUnicode255For1) {
    if( bUnicode255For1 ){
        return s.length;
    }else{
        var len = s.length;
        for( var i=0; i<s.length; i++ ){
            if( s.charCodeAt(i) > 255 ){
                len++;
            }
        }
        return len;
    }
}
function formatDate(t,str){
    var obj = {
        yyyy:t.getFullYear(),
        yy:(""+ t.getFullYear()).slice(-2),
        M:t.getMonth()+1,
        MM:("0"+ (t.getMonth()+1)).slice(-2),
        d:t.getDate(),
        dd:("0" + t.getDate()).slice(-2),
        H:t.getHours(),
        HH:("0" + t.getHours()).slice(-2),
        h:t.getHours() % 12,
        hh:("0"+t.getHours() % 12).slice(-2),
        m:t.getMinutes(),
        mm:("0" + t.getMinutes()).slice(-2),
        s:t.getSeconds(),
        ss:("0" + t.getSeconds()).slice(-2),
        w:['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };
    return str.replace(/([a-z]+)/ig,function($1){return obj[$1]});
}
