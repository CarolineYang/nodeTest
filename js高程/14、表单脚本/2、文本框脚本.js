var hh=document.getElementById('hh');
//1、选择文本
hh.onfocus=function () {
    console.log('dd',event.target,this)
    //选择方法
    // this.select();

};
//选择事件
hh.addEventListener('select',function () {
    //取得选择的文本
    if(typeof this.selectionStart=='number'){
        console.log('text',this.value,this.value.substring(this.selectionStart,this.selectionEnd))
    }else{
        //ie
        console.log(document.selection.createRange().text)
    }

});
//选择部分文本
// 这个东西的前提是hh必须获取焦点
// console.log(hh.setSelectionRange(0,3));
var aa=document.getElementById('aa');
var textbox=document.getElementById('textbox');
aa.focus();
function selectText(textbox,startIndex,endIndex) {
    if(textbox.setSelectionRange){
        textbox.setSelectionRange(startIndex,endIndex)
    }else if(textbox.createRange){
    //    ie
        var range=textbox.createRange();
        range.collapse(true);
        range.moveStart('character',startIndex);
        range.moveEnd('character',endIndex-startIndex);
        range.select();

    }
    textbox.focus();
}
selectText(hh,3,7);
//2、过滤输入
// console.log(EventUtil)  屏蔽字符
EventUtil.addHandler(textbox,'keypress',function (event) {
    event=EventUtil.getEvent(event);
    var target=EventUtil.getTarget(event);
    var charCode=EventUtil.getCharCode(event);
    //ascii码转化为字符串 fromCharCode
    console.log(charCode,String.fromCharCode(charCode))
    if(!/\d/.test(String.fromCharCode(charCode)) && charCode>9 && !event.ctrlKey){
        EventUtil.preventDefault(event)
    }
});
//操作剪贴板 beforecopy beforecut beforepaste copy cut paste 事件  有三个方法 getData() setData() clearData()
EventUtil.addHandler(textbox,'paste',function (event) {
    event=EventUtil.getEvent(event);
    //只有在paste里才可以获取粘贴板的数据 getData()
    var text=EventUtil.getClipboardText(event);
    console.log('paste',text)
    if(!/^\d*$/.test(text)){
        EventUtil.preventDefault(event);
    }
});
EventUtil.addHandler(textbox,'copy',function (event) {
    event=EventUtil.getEvent(event);
    //只有在paste里才可以获取粘贴板的数据 这里不可以获取getData() 只能用setData()和clearData()
    // var text=EventUtil.setClipboardText(event,'3445');
    // event.clipboardData.clearData();
    // console.log('copy',text)
    if(!/^\d*$/.test(text)){
        EventUtil.preventDefault(event);
    }
});
//3、自动切换焦点
(function () {
    function tabForward(event) {
        event=EventUtil.getEvent(event);
        var target=EventUtil.getTarget(event);
        if(target.value.length==target.maxLength){
            var form=target.form;
            for(let i=0;i<form.elements.length;i++){
                if(form.elements[i]==target){
                    if(form.elements[i+1]){
                        form.elements[i+1].focus();
                    }
                    return;
                }
            }
        }
    }
    var input1=document.getElementById('input1');
    var input2=document.getElementById('input2');
    var input3=document.getElementById('input3');
    EventUtil.addHandler(input1,'keyup',tabForward);
    EventUtil.addHandler(input2,'keyup',tabForward);
    EventUtil.addHandler(input3,'keyup',tabForward);
})();

//4、H5约束验证API  required 必填字段 其他输入类型email url
//检验有效性 可以单个表单检验也可以整个表格检验返回布尔值 checkValidity()方法 和validity属性 下有好多属性 input1.validity.valueMissing  .patternMismatch
//禁用验证 html可以 也可以js
var input3=document.getElementById('input3');
input3.formNoValidate=true;
