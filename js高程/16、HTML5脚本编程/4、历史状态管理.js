history.replaceState({name:'heihei'},'')
//再次点击回退时，触发popstate事件，发现window.state的值已经不是null了,而是name：heihei
var btn=document.getElementById('btn');
btn.onclick=function () {
    history.pushState({name:'nico'},'','nico.html');
}
window.addEventListener('popstate',function (event) {
    var state=event.state;
    console.log(state)
    if(state){
        // processState(state)
    }
})