var draw=document.getElementById('draw');
if(draw.getContext){
    var content=draw.getContext('2d');
    //填充
    content.fillStyle='pink';

    //绘制矩形 fillRect() strokeRect() clearRect()
    content.fillRect(10,0,300,100);
    //填充
    // content.fillStyle='rgba(0,0,255,0.5)';
    //描边
    content.strokeStyle='black';
    content.lineJoin='round';
    // content.lineWidth='10px';
    content.strokeRect(10,0,300,100);
    //清楚一个矩形 就是把这个区域变透明 先绘制形状再清楚指定区域
    content.clearRect(100,10,30,20);
}
//3、绘制路径 arc() arcTo() lineTo() moveTo() rect()
var draw1=document.getElementById('draw1');
if(draw1.getContext) {
    var con = draw1.getContext('2d');
    //开始路径
    con.beginPath();
    //绘制外圆
    con.arc(100, 100, 99, 0, 2 * Math.PI, false);
    //绘制内圆
    con.moveTo(194, 100);
    con.arc(100, 100, 94, 0, 2 * Math.PI, false);

    //绘制分针
    con.moveTo(100, 100);
    con.lineTo(100, 15);
    //绘制时针
    con.moveTo(100, 100);
    con.lineTo(35, 100);
    //con填充颜色
    // con.fillStyle='blue';
    // con.fill();
    //描边路径
    con.stroke();
    //确定路径关闭以前100,100是否位于路径上
    console.log(con.isPointInPath(100,100));
    con.closePath();
    //再创建个路径
    con.beginPath();
    con.moveTo(300, 100);
    con.lineTo(400, 10);
    con.stroke();
    con.closePath();
}
//4、绘制文本
