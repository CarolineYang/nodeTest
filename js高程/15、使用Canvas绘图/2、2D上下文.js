var draw=document.getElementById('draw');
if(draw.getContext){
    var content=draw.getContext('2d');
    // // 7、阴影 设置阴影
    content.shadowColor='red';
    content.shadowOffsetX=5;
    content.shadowOffsetY=5;
    content.shadowBlur='rgba(0,0,0,0.8)';
    //8、渐变
    var gradient=content.createLinearGradient(20,20,300,100);
    gradient.addColorStop(0,'white');
    gradient.addColorStop(1,'green');
    content.fillStyle=gradient;
    content.fillRect(30,20,300,100);
    //11、globalAlpha全局透明度
    content.globalAlpha=0.5;

    //填充
    content.fillStyle='yellow';
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
    var gradient1=content.createRadialGradient(500,40,10,500,40,50);
    gradient1.addColorStop(1,'white');
    gradient1.addColorStop(0,'green');
    content.fillStyle=gradient1;
    content.fillRect(400,0,200,100);
    content.globalCompositionOperation='destination-out'

}
//3、绘制路径 arc() arcTo() lineTo() moveTo() rect()
var draw1=document.getElementById('draw1');
if(draw1.getContext) {
    var con = draw1.getContext('2d');
    //开始路径
    con.beginPath();
    // var gradient=con.createLinearGradient(20,20,200,200);
    // gradient.addColorStop(0,'white');
    // gradient.addColorStop(1,'green');
    // con.fillStyle=gradient;
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
//4、绘制文本 fillText() strokeText()  辅助确定文本大小的方法measureText() 返回一个对象只有width属性
//文本自带的4个属性
con.font='bold 14px Arial';
con.textAlign='center';
con.textBaseline='middle';
con.fillText('12',100,10);
//起点对齐
con.textAlign='start';
con.fillText('12',100,20);
//终点对齐
con.textAlign='end';
con.fillText('12',100,30);

//想在一个像素140的矩形中绘制文本hello world！，最终找到合适的字体
var fontSize=100;
con.font=fontSize+'px Arial';
while(con.measureText('Hello World!').width>140){
    fontSize--;
    con.font=fontSize+'px Arial';
};
con.textAlign='center';
con.fillText('Hello World!',150,100);
con.fillText('Font size is'+fontSize+'px now',150,130);
// 5、变换 rotate(angle)、scale(x,y)、translate(x,y)、transform(a11,a12,a21,a22,dx,dy)、setTransform(a11,a12,a21,a22,dx,dy)
// con.rotate(Math.Pi);
// con.translate(100,100)
var draw2=document.getElementById('draw2');
if(draw2.getContext) {
    var con = draw2.getContext('2d');
    //开始路径
    con.beginPath();
    //绘制外圆
    con.arc(100, 100, 99, 0, 2 * Math.PI, false);
    //绘制内圆
    con.moveTo(194, 100);
    con.arc(100, 100, 94, 0, 2 * Math.PI, false);
    //变换原点
    con.translate(100,100);
    //旋转表针
    // con.rotate(1);
    //绘制分针
    con.moveTo(0, 0);
    con.lineTo(0, -85);
    //绘制时针
    con.moveTo(0, 0);
    con.lineTo(-65, 0);
    //con填充颜色
    // con.fillStyle='blue';
    // con.fill();
    //描边路径
    con.stroke();
    //确定路径关闭以前100,100是否位于路径上
    console.log(con.isPointInPath(100,100));
    con.closePath();
    con.font='bold 14px Arial';
    con.textAlign='center';
    con.textBaseline='middle';
    con.fillText('12',0,-90);

    //保存在栈结构中 先进后出 save只保存绘图上下文的设置和变换  不会保存绘图上下文的内容
    con.fillStyle='red';
    con.save();
    con.fillStyle='green';
    con.save();
    con.fillStyle='yellow';
    con.fillRect(250,-50,100,100);
    con.restore();
    con.fillRect(350,-50,100,100);
    con.restore();
    con.fillRect(450,-50,100,100);
    con.restore();
    con.fillRect(550,-50,100,100);
}
//6、绘制图像
var draw3=document.getElementById('draw3');
var img=document.createElement('img');
img.width='100';
img.height='100';
img.src='22.jpg';
var cs=draw3.getContext('2d');
cs.drawImage(img,0,0,200,200);
//是Canvas的方法 ，而不是上下文对象的方法
console.log(draw3.toDataURL())
var pattern=cs.createPattern(draw2,'repeat');
cs.fillStyle=pattern;
cs.fillRect(300,40,1000,500);
// 10、使用图像数据
var imgdata=cs.getImageData(0,0,100,100)
console.log(cs.getImageData(0,0,100,100))
for(let i=0;i<imgdata.data.length;i+=4){
    let red=imgdata.data[i];
    let green=imgdata.data[i+1];
    let blue=imgdata.data[i+2];
    let alpha=imgdata.data[i+3];
    let aver=Math.floor((red+blue+green)/3);
    imgdata.data[i]=aver;
    imgdata.data[i+1]=aver;
    imgdata.data[i+2]=aver;

}
// imgdata.data=imgdata.data;
cs.putImageData(imgdata,0,0)
