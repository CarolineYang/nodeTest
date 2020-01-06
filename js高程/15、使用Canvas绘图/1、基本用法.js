var draw=document.getElementById('draw');
if(draw.getContext){
    var content=draw.getContext('2d');
    content.fillStyle='#0000FF';
    content.fillRect(10,10,50,50)

    //取得图像的数据URL
    var imgUrl=draw.toDataURL('image/png');
    //显示图像
    var img=document.createElement('img');
    img.src=imgUrl;
    document.body.appendChild(img);

}
