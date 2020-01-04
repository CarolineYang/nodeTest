// 1、属性 video audio共有属性 autoplay  paused videoHeight volume
// 好多属性可以直接在元素标签内直接设置
//currentTime controls ended loop
var video=document.getElementById('video');
console.log('..',video.volume,video.loop,video.duration)
//2、事件 abort waiting timeupdate seeking load durationchange play progress
video.play();
setTimeout(function () {
    video.pause();
},30000);
// 3、自定义媒体播放器
var player=document.getElementById('player');
var btn=document.getElementById('btn-video');
var curtime=document.getElementById('curtime');
var duratio=document.getElementById('duration');
duratio.innerHTML = player.duration;
btn.addEventListener('click',function () {
    if(player.paused){
        player.play();
        btn.value='Pause';
    }else{
        player.pause();
        btn.value='Play';
    }
})
setInterval(function () {
    curtime.innerHTML=player.currentTime;
},250)
//4、检测编码器的支持情况 返回三个值 maybe probably ‘’ 空字符是假值
console.log(video.canPlayType('video/ogg'))
if(video.canPlayType('video/ogg')){

}
// 5、Audio
//实例即可开始下载指定文件，下载完成后就可以播放  就像QQ空间的背景音乐 你找不到在哪里播放 但就是在播放
var audio=new Audio('xu.mp3');
audio.addEventListener('canplaythrough',function () {
    setTimeout(function () {
        audio.play();
    },1000)
});