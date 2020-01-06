var draw=document.getElementById('draw');
if(draw.getContext){
    var content=draw.getContext('2d');
    //填充
    content.fillStyle='pink';

    //绘制矩形 fillRect() strokeRect() clearRect()
    content.fillRect(10,100,300,100);
    //填充
    // content.fillStyle='rgba(0,0,255,0.5)';
    //描边
    content.strokeStyle='black';
    content.lineJoin='round';
    // content.lineWidth='10px';
    content.strokeRect(10,100,300,100);
    //清楚一个矩形 就是把这个区域变透明 先绘制形状再清楚指定区域
    content.clearRect(100,120,30,20);
}
