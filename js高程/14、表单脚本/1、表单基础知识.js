var form1=document.getElementById('form1');
var firstF=document.forms[0];
var myform=document.forms['form2'];
console.log(form1,myform,firstF)
//1、提交表单
form1.addEventListener('submit',function () {
    console.log('ssss')
    //阻止提交表单  验证信息没通过
    event.preventDefault();
});
//自带提交表单函数
// firstF.submit();

//2、重置表单
form1.addEventListener('reset',function () {
    console.log('reset')
    //阻止重置表单  验证信息没通过
    event.preventDefault();
});
firstF.reset();
// 3、表单字段 element
console.log(firstF.elements['hh']);
//共有的表单字段属性 disabled form name readOnly type value tabIndex
firstF.addEventListener('submit',function () {
    console.log('submit')
    firstF.elements[1].disabled=true;
    //input button 元素的type是可以动态修改的，而select元素的type属性则是只读的。。不可修改
    firstF.elements[0].type='checkbox';
    form1.elements[0].focus();
    event.preventDefault();
});
//共有的表单字段方法 focus() blur()
if(myform.elements[0].autofocus==true){
    console.log('自动')
}
//共有的表单字段 事件  blur focus change
//对于input和textarea 当他们获取焦点到失去焦点且value值发生改变时才会触发change  select只要选择了不同选项就触发change
var ss=document.getElementById('ss');
ss.addEventListener('change',function () {
    console.log(this.value,this)
})
myform.elements[1].addEventListener('change',function () {
    console.log(this.value)
});
myform.elements[1].addEventListener('blur',function () {
    console.log('blur',this.value)
});
myform.elements[1].addEventListener('focus',function () {
    console.log(this.value)
});

