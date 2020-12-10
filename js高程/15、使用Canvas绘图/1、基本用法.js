var draw=document.getElementById('draw');
if(draw.getContext){
    var content=draw.getContext('2d');
    content.strokeStyle = 'red';
    content.strokeRect(40,40,50,50);
    content.strokeStyle = 'blue';
    content.strokeRect(10,10,50,50);
    // content.fillStyle='#0000FF';
    // content.fillRect(10,10,50,50);
    content.clearRect(40,40,20,20)
    //取得图像的数据URL
    var imgUrl=draw.toDataURL('image/png');
    //显示图像
    var img=document.createElement('img');
    img.src=imgUrl;
    document.body.appendChild(img);
}
