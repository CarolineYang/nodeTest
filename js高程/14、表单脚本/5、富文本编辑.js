EventUtil.addHandler(window,'load',function () {
    //designMode属性只有两个值 on off 可编辑 不可编辑
    frames['ric'].document.designMode='on';
    //操作富文本
    frames['ric'].document.execCommand('bold',false,null)
})
frames['ric'].document.execCommand('italic',false,null)
document.execCommand('backcolor',false,'red');
document.execCommand('fontsize',false,'7');
//富文本选取 getSelection()方法
var h3=document.getElementsByTagName('span')[0];
var selection=frames['ric'].getSelection();
//取得选择的文本
var selectedText=selection.toString();
console.log(selection,selectedText)
selection.rangeCount=30;
//取得代表选区的范围
var range=selection.getRangeAt(0);
var span=frames['ric'].document.createElement('span');
span.style.backgroundColor='yellow';
range.surroundContents(span)

//表单与富文本
var form=document.forms[0];
EventUtil.addHandler(form,'submit',function (event) {
    event=EventUtil.getEvent(event);
    var target=EventUtil.getTarget(event);
    target.elements['comments'].value=frames['ric'].document.body.innerHTML;
    console.log(frames['ric'].document.body.innerHTML)
    event.preventDefault()
});
