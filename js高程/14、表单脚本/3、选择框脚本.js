var form=document.forms[0];
var select=form.elements[0];
console.log(select.options[4].text,select.options[3].index);
console.log(select)
//选择选项
function getSelectedOptions(selectbox) {
    var result=new Array();
    var option=null;
    for(let i=0;i<selectbox.options.length;i++){
        option=selectbox.options[i];
        if(option.selected){
            result.push(option)
        }
    }
    return result
}
EventUtil.addHandler(select,'change',function () {
    console.log(getSelectedOptions(select))
});
//添加选项
var newoption=document.createElement('option');
newoption.appendChild(document.createTextNode('newwwwww'));
newoption.setAttribute('value','new');
//报错 说不上一个node类型添加的东西 就是个字符串 我透啊
// select.appendChild('<option>new</option>')
select.appendChild(newoption)
var newoption2=new Option('option test','option value');
// select.add(newoption2,undefined)
//在index为2的地方插入这个新节点
select.insertBefore(newoption2,select.options[2]);
//移除选项 三种方法
select.remove(0);
select.removeChild(select.options[0]);
select.options[0]=null;
//移动和重排  insertBefore()方法
